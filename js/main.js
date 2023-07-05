let students = [
  {
    name: "Nguyễn Văn A",
    email: "nguyenvan@gmail.com",
    phone: "0123456789",
    address: "Hà Nội",
    gender: "Nam",
  },
  {
    name: "Trần Thị B",
    email: "tranthi@gmail.com",
    phone: "98765442130",
    address: "Đà Nẵng",
    gender: "Nữ",
  },
  {
    name: "Lê Thị C",
    email: "lethi@gmail.com",
    phone: "32132153254",
    address: "Quảng Nam",
    gender: "Nữ",
  },
];

if (localStorage.getItem("students")) {
  [];
} else {
  localStorage.setItem("students", JSON.stringify(students));
}

// Function Render
function renderStudent() {
  let students = JSON.parse(localStorage.getItem("students"));
  let tableStudent = document.querySelector("table");
  let tableStudentContent = "";
  tableStudentContent += `<thead>
    <tr>
        <td>STT</td>
        <td>Họ tên</td>
        <td>Email</td>
        <td>Điện thoại</td>
        <td>Địa chỉ</td>
        <td>Gender</td>
        <td>Hành động</td>
        <td><button onclick="handleSort()">Sắp xếp (Alpha B)</button></td>
    </tr>
</thead>`;
  for (let i = 0; i < students.length; i++) {
    tableStudentContent += `
<tbody>
    <tr>
        <td>${i + 1}</td>
        <td>${students[i].name}</td>
        <td>${students[i].email}</td>
        <td>${students[i].phone}</td>
        <td>${students[i].address}</td>
        <td>${students[i].gender}</td>
        <td>
            <button onclick="handleEdit(${i})" class=""edit-btn">Edit</button>
            <button onclick="handleDelete(${i})">Delete</button>
        </td>
        <td></td>
    </tr>
</tbody>`;
  }
  tableStudent.innerHTML = tableStudentContent;
}
renderStudent(students);

// Function handleAdd()
// Lấy dữ liệu từ Input
function handleAdd() {
  let students = JSON.parse(localStorage.getItem("students"));

  let inputName = document.querySelector("#fullname").value;
  let inputEmail = document.querySelector("#email").value;
  let inputPhone = document.querySelector("#phone").value;
  let inputAddress = document.querySelector("#address").value;
  let inputGender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  if (
    inputName === "" ||
    inputEmail === "" ||
    inputPhone === "" ||
    inputAddress === ""
  ) {
    alert(
      "Hãy kiểm tra lại thông tin không để trống và nhập đúng cú pháp Email!"
    );
    return;
  }

  let newStudent = {
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    address: inputAddress,
    gender: inputGender,
  };

  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));

  document.querySelector("#fullname").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#address").value = "";
  renderStudent(students);
}

// Function handleDelete()
function handleDelete(i) {
  let students = JSON.parse(localStorage.getItem("students"));
  students.splice(i, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudent(students);
}

// Function Edit
function handleEdit(i) {
  let students = JSON.parse(localStorage.getItem("students"));

  let inputName = document.querySelector("#fullname");
  let inputEmail = document.querySelector("#email");
  let inputPhone = document.querySelector("#phone");
  let inputAddress = document.querySelector("#address");

  inputName.value = students[i].name;
  inputEmail.value = students[i].email;
  inputPhone.value = students[i].phone;
  inputAddress.value = students[i].address;
  console.log("Đã chọn nút edit thứ : " + i);

  let saveBtn = document.querySelector(".save-btn");
  saveBtn.setAttribute("onclick", `handleUpdate(${i})`);
}

function handleUpdate(i) {
  let students = JSON.parse(localStorage.getItem("students"));

  let inputName = document.querySelector("#fullname").value;
  let inputEmail = document.querySelector("#email").value;
  let inputPhone = document.querySelector("#phone").value;
  let inputAddress = document.querySelector("#address").value;
  let inputGender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  if (
    inputName === "" ||
    inputEmail === "" ||
    inputPhone === "" ||
    inputAddress === ""
  ) {
    alert(
      "Hãy kiểm tra lại thông tin không để trống và nhập đúng cú pháp Email!"
    );
  }

  let updateStudent = {
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    address: inputAddress,
    gender: inputGender,
  };

  if (i !== "") {
    students.splice(i, 1, updateStudent);
  }

  let saveBtn = document.querySelector(".save-btn");
  saveBtn.setAttribute("onclick", "handleAdd()");
  document.querySelector("#fullname").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#address").value = "";
  document.querySelector('input[name="gender"]:checked').value = "";
  localStorage.setItem("students", JSON.stringify(students));
  renderStudent(students);
}

// Function Search
function handleSearch() {
  let searchResult = document.querySelector(".search-result");
  let inputSearch = document.querySelector(".input-search");
  let inputSearchValue = inputSearch.value.toLowerCase();
  console.log(inputSearchValue);
  let filterStudent = students.filter(function (student) {
    if (
      student.name.toLowerCase().includes(inputSearchValue) ||
      student.email.toLowerCase().includes(inputSearchValue) ||
      student.address.toLowerCase().includes(inputSearchValue) ||
      student.phone.toString().toLowerCase() === inputSearchValue ||
      student.gender.toLowerCase().toLowerCase() === inputSearchValue
    ) {
      return true;
    }
    return false;
  });
  console.log(filterStudent);
  searchResult.innerHTML = `Có ${filterStudent.length} kết quả tìm kiếm`;
  renderStudent(filterStudent);
}

// Function Sort

function handleSort() {
  // Get the table body
  const tableBody = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  // Get all the rows in the table body
  const rows = tableBody.getElementsByTagName("tr");

  // Sort the rows by the "Full name" column
  rows.sort((row1, row2) => {
    const name1 = row1.getElementsByTagName("td")[1].innerHTML;
    const name2 = row2.getElementsByTagName("td")[1].innerHTML;
    return name1.localeCompare(name2);
  });
}
