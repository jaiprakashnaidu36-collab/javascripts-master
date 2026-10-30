const words = ["focus", "purely", "on", "the", "flow", "of", "each", "keystroke",
"without", "the", "rush", "of", "a", "ticking", "clock", "take",
"your", "time", "to", "build", "accuracy", "and", "rhythm", "code",
"system", "memory", "logic", "render", "state", "execute", "compile",
"buffer", "stream", "thread", "process", "variable", "function", "array"]

const select = document.querySelector("#typing-input")
const select_word_size = document.querySelector(".mode-bar")
let word_size = 0;

select_word_size.addEventListener("click", (e) => {
  if (!e.target.classList.contains("word-btn")) return;
  word_size = Number(e.target.dataset.words);
  console.log("Updated word_size:", word_size);
})

let inp = []

for(let i = 0 ; i < word_size ; i++){
    let random = Math.floor(Math.random()*50)
    inp[i] = words[random]
    let create = 
}

