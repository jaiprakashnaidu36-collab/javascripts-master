# The Complete Guide to JavaScript Events

Events are signals sent by the browser informing your code that something occurred on the page—such as a user clicking a button, resizing the viewport, submitting a form, or typing into an input field. Handling these events enables interactive, reactive web applications.

---

## Table of Contents

1. [How Events Work: The Event Lifecycle](#1-how-events-work-the-event-lifecycle)
2. [Attaching Event Handlers](#2-attaching-event-handlers)
3. [The Event Object (`Event`)](#3-the-event-object-event)
4. [Event Propagation: Bubbling & Capturing](#4-event-propagation-bubbling--capturing)
5. [Controlling Events: `stopPropagation`, `stopImmediatePropagation`, & `preventDefault`](#5-controlling-events)
6. [The Event Delegation Pattern](#6-the-event-delegation-pattern)
7. [Essential Event Categories & Examples](#7-essential-event-categories--examples)
   - [Mouse & Pointer Events](#a-mouse--pointer-events)
   - [Keyboard Events](#b-keyboard-events)
   - [Form & Input Events](#c-form--input-events)
   - [Focus & Blur Events](#d-focus--blur-events)
   - [Document & Window Lifecycle Events](#e-document--window-lifecycle-events)
   - [Scroll & Resize Events](#f-scroll--resize-events)
8. [Custom Events (`CustomEvent`)](#8-custom-events-customevent)
9. [Event Performance: Debouncing, Throttling, and Passive Listeners](#9-event-performance)
10. [Event Cheat Sheet](#10-event-cheat-sheet)

---

## 1. How Events Work: The Event Lifecycle

When an event triggers in a web page, the browser creates an **Event object**, resolves the element hierarchy, and directs the event through three distinct phases:

```
               [ Window ]
                │      ▲
  1. CAPTURING  │      │  3. BUBBLING
     PHASE      ▼      │     PHASE
              [ <div>  ]
                │      ▲
                ▼      │
             [ <button> ]
           2. TARGET PHASE
```

1. **Capturing Phase (Trickling)**: The event descends from the `window` down through document ancestors to reach the target element.
2. **Target Phase**: The event reaches the actual element where the interaction originated.
3. **Bubbling Phase**: The event bubbles up from the target back through ancestors to the `window`.

---

## 2. Attaching Event Handlers

There are three ways to bind event listeners in JavaScript, but only one is recommended.

### A. Modern Standard: `addEventListener()` (Recommended)

Allows adding multiple independent listeners to the same element, supports configuration options, and works cleanly with removal logic.

```javascript
const btn = document.querySelector("#submit-btn");

function handleClick(event) {
  console.log("Button clicked!");
}

// Adding the listener
btn.addEventListener("click", handleClick);

// Removing the listener (requires reference to the exact function)
btn.removeEventListener("click", handleClick);
```

#### Listener Configuration Options:

`addEventListener` accepts a third argument: a boolean or an options object.

```javascript
btn.addEventListener("click", handleClick, {
  capture: false, // true to trigger in capturing phase, false for bubbling (default)
  once: true,     // automatically removes listener after firing once
  passive: true   // signals the handler will not call preventDefault() (optimizes scrolling)
});
```

### B. DOM Property Handlers (Outdated)

```javascript
const btn = document.querySelector("#submit-btn");

btn.onclick = function() {
  console.log("Clicked!");
};

// Overwrites previous listener
btn.onclick = function() {
  console.log("New handler!"); // Overwrites the earlier function
};
```
*Disadvantage:* You can only attach a single handler per event type; assigning a new one overwrites the old one.

### C. Inline HTML Attributes (Anti-pattern — Avoid)

```html
<!-- Anti-pattern: mix of markup and logic -->
<button onclick="alert('Avoid this')">Click</button>
```

---

## 3. The Event Object (`Event`)

When an event fires, the browser passes an event object to the callback containing metadata about what occurred.

```javascript
document.addEventListener("click", (event) => {
  console.log("Event type:", event.type);            // "click"
  console.log("Target:", event.target);              // The exact innermost element clicked
  console.log("CurrentTarget:", event.currentTarget);// The element listening to the event
  console.log("Timestamp:", event.timeStamp);        // Milliseconds elapsed since page loaded
  console.log("Is Trusted:", event.isTrusted);       // true if user action, false if script-dispatched
});
```

### `target` vs. `currentTarget`

* **`event.target`**: The actual element where the event originated (e.g., an icon inside a button).
* **`event.currentTarget`**: The element to which the event listener was attached (e.g., the parent button).

---

## 4. Event Propagation: Bubbling & Capturing

By default, event listeners run during the **bubbling** phase.

```html
<div id="parent" style="padding: 20px; background: #eee;">
  <button id="child">Click Me</button>
</div>
```

```javascript
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// Bubbling order (default)
parent.addEventListener("click", () => console.log("Parent clicked (bubbling)"));
child.addEventListener("click", () => console.log("Child clicked"));

// Clicking child logs:
// 1. "Child clicked"
// 2. "Parent clicked (bubbling)"
```

To run a listener during the **capturing** phase, pass `{ capture: true }` (or simply `true`):

```javascript
parent.addEventListener("click", () => {
  console.log("Parent clicked (capturing)");
}, { capture: true });

// Clicking child now logs:
// 1. "Parent clicked (capturing)"
// 2. "Child clicked"
// 3. "Parent clicked (bubbling)"
```

---

## 5. Controlling Events

### A. `event.preventDefault()`
Stops the browser's default action for that event without stopping propagation.

```javascript
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents navigating to the URL
  console.log("Link navigation stopped.");
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents page reload
  console.log("Form submission handled with JS.");
});
```

### B. `event.stopPropagation()`
Prevents the event from traveling further up (bubbling) or down (capturing) the DOM tree.

```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation(); // Parent listener will not be notified!
  console.log("Child clicked only");
});
```

### C. `event.stopImmediatePropagation()`
Stops bubbling **and** prevents any subsequent event listeners attached to the *same* element from executing.

```javascript
btn.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("First handler runs");
});

btn.addEventListener("click", () => {
  console.log("Second handler will NEVER run");
});
```

---

## 6. The Event Delegation Pattern

Instead of adding individual event listeners to many matching elements, attach **a single listener to a common ancestor** and inspect `e.target`.

### Why Use Event Delegation?
1. **Memory efficiency**: Reduces hundreds of event listeners to just one.
2. **Dynamic elements**: Handles elements added to the DOM after page load automatically.

### Example: Dynamic Todo List

```html
<ul id="todo-list">
  <li>Task 1 <button class="delete-btn">Delete</button></li>
  <li>Task 2 <button class="delete-btn">Delete</button></li>
</ul>
```

```javascript
const list = document.querySelector("#todo-list");

list.addEventListener("click", (e) => {
  // Check if the clicked target or its closest ancestor matches our selector
  const deleteBtn = e.target.closest(".delete-btn");

  if (deleteBtn && list.contains(deleteBtn)) {
    const item = deleteBtn.closest("li");
    item.remove();
  }
});
```

---

## 7. Essential Event Categories & Examples

### A. Mouse & Pointer Events

| Event | Triggers When |
| :--- | :--- |
| `click` | Mouse button clicked and released on the same element |
| `dblclick` | Element is clicked twice in quick succession |
| `mousedown` / `mouseup` | Mouse button pressed down / released |
| `mouseenter` / `mouseleave` | Pointer moves inside / outside (does **not** bubble) |
| `mouseover` / `mouseout` | Pointer moves inside / outside (bubbles) |
| `mousemove` | Pointer moves across the element |
| `contextmenu` | Right-click occurs (often paired with `e.preventDefault()`) |

```javascript
const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  // Mouse coordinates
  console.log(`Viewport: X=${e.clientX}, Y=${e.clientY}`);
  console.log(`Page: X=${e.pageX}, Y=${e.pageY}`);
  console.log(`Element Relative: X=${e.offsetX}, Y=${e.offsetY}`);
});
```

---

### B. Keyboard Events

| Event | Triggers When |
| :--- | :--- |
| `keydown` | Any key is pressed down (repeats if held) |
| `keyup` | A key is released |

```javascript
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);     // Actual character (e.g., "Enter", "a", "Escape")
  console.log("Physical code:", e.code);  // Physical key code (e.g., "KeyA", "Space")
  
  // Checking modifier keys
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // Stop native browser "Save Webpage" prompt
    console.log("Custom save triggered!");
  }
});
```

---

### C. Form & Input Events

| Event | Triggers When |
| :--- | :--- |
| `input` | Value of an `<input>`, `<textarea>`, or `<select>` changes immediately |
| `change` | Value commit finishes (e.g., losing focus or picking a `<select>` option) |
| `submit` | Form submission occurs |
| `reset` | Form reset button is activated |

```javascript
const searchInput = document.querySelector("#search");

// Immediate feedback as user types
searchInput.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});
```

---

### D. Focus & Blur Events

| Event | Triggers When | Bubbles? |
| :--- | :--- | :--- |
| `focus` | Element gains focus | ❌ No |
| `blur` | Element loses focus | ❌ No |
| `focusin` | Element gains focus | ✅ Yes (useful for delegation) |
| `focusout` | Element loses focus | ✅ Yes (useful for delegation) |

```javascript
const form = document.querySelector("form");

// Delegate focus events across all inputs using focusin
form.addEventListener("focusin", (e) => {
  e.target.classList.add("highlight");
});

form.addEventListener("focusout", (e) => {
  e.target.classList.remove("highlight");
});
```

---

### E. Document & Window Lifecycle Events

```javascript
// 1. HTML is parsed, DOM ready (images/stylesheets may still be loading)
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready for manipulation.");
});

// 2. Entire page loaded (including images, stylesheets, iframes)
window.addEventListener("load", () => {
  console.log("All external assets finished loading.");
});

// 3. User is about to leave or close page
window.addEventListener("beforeunload", (e) => {
  // Triggers native confirmation prompt in browsers
  e.preventDefault();
  e.returnValue = "";
});
```

---

### F. Scroll & Resize Events

```javascript
// Resizing the browser window
window.addEventListener("resize", () => {
  console.log(`Window size: ${window.innerWidth} x ${window.innerHeight}`);
});

// Scrolling the page
window.addEventListener("scroll", () => {
  console.log("Vertical scroll offset:", window.scrollY);
}, { passive: true });
```

---

## 8. Custom Events (`CustomEvent`)

JavaScript allows dispatching custom events to communicate between separate modules or components without tightly coupling code.

```javascript
const notifySystem = document.querySelector("#notifications");

// 1. Create a custom event with a payload inside 'detail'
const userLoginEvent = new CustomEvent("user:login", {
  detail: { username: "jai_prakash", role: "admin" },
  bubbles: true,
  cancelable: true
});

// 2. Listen for the custom event
notifySystem.addEventListener("user:login", (e) => {
  console.log(`User logged in: ${e.detail.username} (${e.detail.role})`);
});

// 3. Dispatch the event
notifySystem.dispatchEvent(userLoginEvent);
```

---

## 9. Event Performance: Debouncing, Throttling, and Passive Listeners

Events like `scroll`, `resize`, and `mousemove` fire dozens of times per second. Running complex logic inside unthrottled handlers causes browser lag and dropped frames.

### A. Passive Listeners

Tells the browser the listener will never call `preventDefault()`, allowing scrolling and touch gestures to remain fluid.

```javascript
window.addEventListener("scroll", handleScroll, { passive: true });
```

### B. Debounce Pattern
Delays execution until a specified delay has elapsed since the **last time** the event fired (ideal for search autocompletes, window resizing).

```javascript
function debounce(func, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const handleSearch = debounce((query) => {
  console.log("Fetching API data for:", query);
}, 400);

searchInput.addEventListener("input", (e) => handleSearch(e.target.value));
```

### C. Throttle Pattern
Guarantees execution happens at most once within a specified time window (ideal for scrolling and progress indicators).

```javascript
function throttle(func, interval = 200) {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func(...args);
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Scroll position logged.");
}, 250));
```

---

## 10. Event Cheat Sheet

| Purpose | Method / Property |
| :--- | :--- |
| **Add listener** | `element.addEventListener(type, handler, options)` |
| **Remove listener** | `element.removeEventListener(type, handler)` |
| **Origin element** | `event.target` |
| **Current listener target** | `event.currentTarget` |
| **Prevent browser default** | `event.preventDefault()` |
| **Halt bubbling** | `event.stopPropagation()` |
| **Halt all same-target handlers** | `event.stopImmediatePropagation()` |
| **Fire custom event** | `element.dispatchEvent(new CustomEvent(name, { detail }))` |
| **One-time execution** | `element.addEventListener(type, fn, { once: true })` |
| **Smooth scroll performance** | `element.addEventListener("scroll", fn, { passive: true })` |