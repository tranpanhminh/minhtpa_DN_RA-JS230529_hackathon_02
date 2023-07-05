// Script bài 3
// function bai_03() {
function bai_03(amount, months, interestRate) {
  interestRate = interestRate / 100;
  let years = months / 12;
  let interest = amount * interestRate * years;
  let total = amount + interest;

  return total;
}
let amount = Number(prompt("Nhập số tiền bạn cần gửi: "));
let months = Number(prompt("Nhập số tháng bạn cần gửi: "));

let total = bai_03(amount, months, 7);


let inputAmount = document.querySelector(".input-amount");
let inputTime = document.querySelector(".time");
let fullAmount = document.querySelector(".full-amount");

inputAmount.innerHTML = amount;
inputTime.innerHTML = months + " tháng";
fullAmount.innerHTML = total;

