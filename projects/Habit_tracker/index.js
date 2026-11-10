const progress = document.getElementById("progress-text");
const color_Progress = document.querySelector(".progress-bar-bg");
const data = document.querySelector("#submit-form");
const filter_tool = document.querySelector(".filter-toolbar");
const habit_counter = document.querySelector("#habits-container");
const data_value = document.querySelector("#habit-input");
const select_data = document.querySelector("#habit-category");
const adddiv = document.querySelector(".habits-list");

function progress_display(){

}


const habits = [];

data.addEventListener("submit", (e) => {
    e.preventDefault();

    const habitText = data_value.value.trim();
    const habitCategory = select_data.value;

    if (!habitText) return;

    const card = document.createElement("div");
    card.classList.add("habit-card");

    card.innerHTML = `
        <div class="habit-info">
            <h2 class="habit-title">${habitText}</h2>
            <span class="category-tag tag-${habitCategory.toLowerCase()}">${habitCategory}</span>
            <span class="streak-badge">🔥 0 Days</span>
        </div>

        <div class="week-tracker">
            <div class="day-node">
                <span class="day-label">Mon</span>
                <button class="day-circle" title="Toggle Mon"></button>
            </div>
            <div class="day-node">
                <span class="day-label">Tue</span>
                <button class="day-circle" title="Toggle Tue"></button>
            </div>
            <div class="day-node">
                <span class="day-label">Wed</span>
                <button class="day-circle" title="Toggle Wed"></button>
            </div>
            <div class="day-node">
                <span class="day-label">Thu</span>
                <button class="day-circle" title="Toggle Thu"></button>
            </div>
            <div class="day-node">
                <span class="day-label">Fri</span>
                <button class="day-circle" title="Toggle Fri"></button>
            </div>
            <div class="day-node">
                <span class="day-label">Sat</span>
                <button class="day-circle" title="Toggle Sat"></button>
            </div>
            <div class="day-node">
                <span class="day-label">Sun</span>
                <button class="day-circle" title="Toggle Sun"></button>
            </div>
        </div>

        <button class="btn-delete" title="Delete habit">
            <span class="material-symbols-outlined">delete</span>
        </button>
    `;

    adddiv.append(card);

    habits.push({
        name: habitText,
        category: habitCategory,
        streak: 0
    });

    data.reset();
});


// console.log(habits)


const habitsContainer = document.querySelector("#habits-container");

habitsContainer.addEventListener("click", (e) => {
    const dayBtn = e.target.closest(".day-circle");
    if (dayBtn) {
        dayBtn.classList.toggle("completed");

        if (dayBtn.classList.contains("completed")) {
            dayBtn.innerHTML = `<span class="material-symbols-outlined">check</span>`;
        } else {
            dayBtn.innerHTML = "";
        }

    }

    const deleteBtn = e.target.closest(".btn-delete");
    if (deleteBtn) {
        const card = deleteBtn.closest(".habit-card");
        if (card) {
           card.remove();
        }
    }
});