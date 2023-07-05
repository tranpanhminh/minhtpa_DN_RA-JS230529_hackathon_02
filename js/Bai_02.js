// Script bài 2
function capitalize(inputString) {
  const firstLetter = inputString[0];
  const isUppercase = firstLetter.toUpperCase() === firstLetter;

  const newFirstLetter = isUppercase
    ? firstLetter.toLowerCase()
    : firstLetter.toUpperCase();

  return newFirstLetter + inputString.slice(1);
}

function bai_02() {
  const inputString = prompt("Nhập vào 1 chuỗi: ");

  const capitalizeString = inputString.split(" ").map(capitalize).join(" ");

  console.log(capitalizeString);
  let inputText = document.querySelector(".input-text");
  let outputText = document.querySelector(".output-text");
  inputText.innerHTML = inputString;
  outputText.innerHTML = capitalizeString;
}
