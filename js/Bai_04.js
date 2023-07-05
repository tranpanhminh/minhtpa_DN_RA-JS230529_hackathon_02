// Script bài 4
function bai_04() {
  const soThuNhat = parseInt(prompt("Nhập vào số nguyên thứ 1: "));
  const soThuHai = parseInt(prompt("Nhập vào số nguyên thứ 2: "));
  const soThuBa = parseInt(prompt("Nhập vào số nguyên thứ 3: "));
  const soThuTu = parseInt(prompt("Nhập vào số nguyên thứ 4: "));
  const soThuNam = parseInt(prompt("Nhập vào số nguyên thứ 5: "));

  let max = soThuNhat;

  if (max < soThuHai) {
    max = soThuHai;
  }

  if (max < soThuBa) {
    max = soThuBa;
  }

  if (max < soThuTu) {
    max = soThuTu;
  }

  if (max < soThuNam) {
    max = soThuNam;
  }

  const numbers = [soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam];
  numbers.sort(function (a, b) {
    return b - a;
  });

  const resultElement = document.querySelector(".output-text-04");
  resultElement.innerHTML =
    "Số thứ nhất là: " +
    soThuNhat +
    "<br>" +
    "Số thứ hai là: " +
    soThuHai +
    "<br>" +
    "Số thứ ba là: " +
    soThuBa +
    "<br>" +
    "Số thứ tư là: " +
    soThuTu +
    "<br>" +
    "Số thứ năm là: " +
    soThuNam +
    "<br>" +
    "Max là số: " +
    max +
    "<br>" +
    "Dãy số theo thứ tự giảm dần là: " +
    numbers;
}
