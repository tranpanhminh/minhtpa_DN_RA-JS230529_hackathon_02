let staffs = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"];

// Function Render Staff
function renderStaffs(staffs) {
  let table = document.querySelector("table");
  let tableContent = "";
  tableContent += `<thead>
              <tr>
                  <th colspan="2">Staff</th>
                  <th>${staffs.length} Staffs</th>
              </tr>
          </thead>`;
  for (let i in staffs) {
    tableContent += `<tbody>
              <tr>
                  <td>${staffs[i]}</td>
                  <td><button class="edit-btn" onclick="handleEdit(${i})">Edit</button></td>
                  <td><button class="delete-btn" onclick="handleDelete(${i})">Delete</button></td>
              </tr>
          </tbody>`;
  }

  table.innerHTML = tableContent;
}
renderStaffs(staffs);

// Function Delete Staffs
function handleDelete(i) {
  staffs.splice(i, 1);
  renderStaffs(staffs);
}

// Function Add Staffs
function handleAdd() {
  let inputStaff = document.querySelector(".input-new-staff").value;
  if (inputStaff !== "") {
    staffs.push(inputStaff);
  }
  renderStaffs(staffs);
  document.querySelector(".input-new-staff").value = "";
}

// Function Edit Staffs
function handleEdit(i) {
  let indexStaff = document.querySelector(".index-staff");
  let oldStaffName = document.querySelector(".old-name-staff");

  let updateStaffSectionShow = document.querySelector(".update-staff-section");
  updateStaffSectionShow.style.display = "block";
  indexStaff.value = i;
  oldStaffName.value = staffs[i];
}

// Function Update
function handleUpdate(i) {
  let indexStaffName = document.querySelector(".index-staff").value;
  let newStaffName = document.querySelector(".old-name-staff").value;

  if (indexStaffName != "") {
    staffs.splice(indexStaffName, 1, newStaffName);
  }

  let updateStaffSectionHide = document.querySelector(".update-staff-section");
  updateStaffSectionHide.style.display = "none";

  renderStaffs(staffs);
}

// Function Search
function handleSearch() {
  let inputSearch = document.querySelector(".input-search").value;
  console.log(inputSearch);
  let staffSearch = [];
  for (let item of staffs) {
    if (item.toLowerCase().includes(inputSearch.toLowerCase())) {
      staffSearch.push(item);
    }
  }
  renderStaffs(staffSearch);
}
