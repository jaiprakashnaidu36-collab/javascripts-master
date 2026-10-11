const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#Weight").value);
  const result = document.querySelector("#result");

  if (height == " " || height < 0 || isNaN(height)) {
    result.innerText = "Please enter valid height .";
    return;
  }

   if (weight == " " || weight < 0 || isNaN(weight)) {
    result.innerText = "Please enter valid weight.";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  result.innerHTML = `<span>${bmi}</span>;`
});