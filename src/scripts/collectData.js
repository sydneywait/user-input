const collectData = (firstNameId, lastNameId, emailId, phoneId, birthdayId, departmentId, supervisorId) =>{
    //collect the data from the form fields//
    const firstName = document.querySelector(firstNameId).value
    const lastName = document.querySelector(lastNameId).value
    const email = document.querySelector(emailId).value
    const phone = document.querySelector(phoneId).value
    const birthday = document.querySelector(birthdayId).value
    const department = document.querySelector(departmentId).value
    //check if the checkbox is checked
    const supervisor = document.getElementById(supervisorId)
    let superValue = ""
    if (supervisor.checked === true) {
        superValue = "Yes"
    }
    else {
        superValue = "No"
    }
    //Check which gender is specified
    const gender = document.querySelector("input[name = \"gender\"]:checked").value
    const employeeObject = buildEmployeeObject(firstName, lastName, email, phone, birthday, department, superValue, gender)
    createEmployee(employeeObject).then(() => {
        printAllEmployees()
    })

}


