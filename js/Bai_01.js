// Script bài 1
function bai_01() {
  let inputText = document.querySelector("#input-text").value;
  console.log(inputText);
  const textOriginal = document.querySelector(".text-original");
  textOriginal.innerHTML = inputText;

  let reversedInputText = inputText.split("").reverse().join("");
  console.log(reversedInputText);
  const textReverse = document.querySelector(".text-reverse");
  textReverse.innerHTML = reversedInputText;

  let result = "";
  if (inputText.toLowerCase() == reversedInputText.toLowerCase()) {
    result += "Là chuỗi đối xứng";
  } else {
    result += "Không phải là chuỗi đối xứng";
  }

  const resultElement = document.querySelector(".result");
  resultElement.innerHTML =
    inputText + " " + result + " của " + reversedInputText;
}
