// This is the form that is displayed when the "edit" button is clicked on an employee card
// it targets the specific employee based on the ID number.  requires a fetch call first
// getEmployee
const buildEditForm = (singleEmployee) => {
  // Build string to pre-populate form with gender
  let genderString = ""
  if (singleEmployee.gender === "male") {
    genderString = `<input type="radio" id="male-edit-${singleEmployee.id}" name="gender" value="male" checked>
    <label for="male">male</label>
    <input type="radio" id="female-edit-${singleEmployee.id}" name="gender" value="female">
    <label for="female">female</label><br>`
  }
  if (singleEmployee.gender === "female") {
    genderString = `<input type="radio" id="male-edit-${singleEmployee.id}" name="gender" value="male">
  <label for="male">male</label>
  <input type="radio" id="female-edit-${singleEmployee.id}" name="gender" value="female" checked>
  <label for="female">female</label><br>`
// Build string to pre-populate form with supervisor status
  }
  let checkboxString = ""
  if (singleEmployee.supervisor === "Yes") {

    checkboxString = `<input type="checkbox" name = "super" id="supervisor-edit-${singleEmployee.id}" value=true checked >Supervisor?<br>`
  } else {

    checkboxString = `<input type="checkbox" name = "super" id="supervisor-edit-${singleEmployee.id}" value="Yes" >Supervisor?<br>`
  }
// Build string to pre-populate form with current department
  const departmentArray = ["Finance", "Sales", "Human Resources", "Marketing"]
  let departmentString = ""

  departmentArray.forEach((element) => {

    if (singleEmployee.department === element) {
      departmentString = departmentString + `<option value="${element}" selected>${element}</option>`
    }
    else {
      departmentString = departmentString + `<option value="${element}">${element}</option>`
    }

  })

 return `<div id="form-header-edit">
<section id="form-input-edit">
  <fieldset>
    <input type="text" id="first-name-edit-${singleEmployee.id}" value="${singleEmployee.firstName}"><br>
    <input type="text" id="last-name-edit-${singleEmployee.id}" value="${singleEmployee.lastName}"><br>
    <input type="text" id="email-address-edit-${singleEmployee.id}" value="${singleEmployee.email}"><br>
    <input type="text" id="phone-number-edit-${singleEmployee.id}" value="${singleEmployee.phone}"><br>
    <input type="date" id="birthday-edit-${singleEmployee.id}" value="${singleEmployee.birthday}"><br>
    <select id="department-edit-${singleEmployee.id}">
    ${departmentString}
    </select><br>
    ${checkboxString}
    ${genderString}
    <button id="save-btn-edit-${singleEmployee.id}">Save</button>
    <button id="exit-btn-edit-${singleEmployee.id}">Exit</button>

`
}
