const buildEditForm = (singleEmployee) =>{

return `<div id="form-header-edit">
<section id="form-input-edit">
  <fieldset>
    <input type="text" id="first-name-edit-${singleEmployee.id}" value="${singleEmployee.firstName}"><br>
    <input type="text" id="last-name-edit-${singleEmployee.id}" value="${singleEmployee.lastName}"><br>
    <input type="text" id="email-address-edit-${singleEmployee.id}" value="${singleEmployee.email}"><br>
    <input type="text" id="phone-number-edit-${singleEmployee.id}" value="${singleEmployee.phone}"><br>
    <input type="text" id="birthday-edit-${singleEmployee.id}" value="${singleEmployee.birthday}"><br>
    <select id="department-edit-${singleEmployee.id}">
      <option value="Finance">Finance</option>
      <option value="Sales">Sales</option>
      <option value="Human Resources">Human Resources</option>
      <option value="Marketing">Marketing</option>
    </select><br>
    <input type="checkbox" name = "super" id="supervisor-edit-${singleEmployee.id}" value=true >Supervisor?<br>
    <input type="radio" id="male-edit-${singleEmployee.id}" name="gender" value="male">
    <label for="male">male</label>
    <input type="radio" id="female-edit-${singleEmployee.id}" name="gender" value="female">
    <label for="female">female</label><br>
    <button id="save-btn-edit-${singleEmployee.id}">Save</button>
    <button id="exit-btn-edit-${singleEmployee.id}">Exit</button>

`

}