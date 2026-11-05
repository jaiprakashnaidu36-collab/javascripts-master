const words = ["syntax", "object", "string", "number", "boolean", "promise", "async", "await",
  "module", "import", "export", "class", "method", "scope", "closure", "stack",
  "drift", "poise", "steady", "balance", "center", "clarity", "serene", "silent",
  "gentle", "subtle", "patience", "glide", "stride", "effort", "ease", "mastery",
  "habit", "instinct", "reflex", "muscle", "tactile", "sensor", "touch", "press",
  "release", "switch", "linear", "click", "spring", "travel", "bottom", "space",
  "shift", "enter", "delete", "escape", "symbol", "glyph", "layout", "qwerty",
  "colemak", "dvorak", "practice", "session", "warmup", "sprint", "endurance", "stamina",
  "metric", "target", "record", "streak", "percent", "error", "flawless", "fluent",
  "cadence", "harmony", "pace", "stride", "drift", "align", "vision", "intent",
  "pattern", "design", "concept", "theory", "matrix", "vector", "scalar", "tensor",
  "formula", "element", "factor", "output", "input", "result", "action", "effect",
  "context", "domain", "entity", "service", "adapter", "facade", "bridge", "proxy",
  "factory", "builder", "observer", "strategy", "command", "state", "visitor", "memento",
  "clean", "solid", "dry", "atomic", "robust", "resilient", "modular", "scalable"]

const select = document.querySelector("#typing-input")
const select_word_size = document.querySelector(".mode-bar")
const clear_words = document.querySelector(".words-wrapper")
let word_size = 0;
select_word_size.addEventListener("click", (e) => {
	if (!e.target.classList.contains("word-btn")) return;
	word_size = Number(e.target.dataset.words);
	console.log("Updated word_size:", word_size);
	append_()
})

function append_(){
	clear_words.innerHTML = " ";
	const arr = []
	
	for(let i = 0 ; i < word_size ; i++){
		let random_index = Math.floor(Math.random()* words.length)
		const wordSpan = document.createElement("span");
    	wordSpan.classList.add("word");
		arr[i] = words[random_index]
		wordSpan.textContent = arr[i] + " "
		clear_words.append(wordSpan)
		clear_words.style
	}
	
	const currentWordEl = wordsWrapper.querySelector(".word.current");

	if (currentWordEl) {
	// Keeps the active word centered or visible in the frame
	currentWordEl.scrollIntoView({
		behavior: "smooth",
		block: "center"
	});
	}
}