const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  const note = document.querySelector(".note");

  if (
    height === "" ||
    height < 0 ||
    (isNaN(height) && weight === "") ||
    weight < 0 ||
    isNaN(weight)
  ) {
    result.innerHTML = "Please Give Valid values";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      note.innerHTML = `<span>Your are in Under Weight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      note.innerHTML = `<span>Your are in Normal range</span>`;
    } else {
      note.innerHTML = `<span>Your are Over Weight</span>`;
    }
  }
});
