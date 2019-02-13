const collectData = () =>{
    //collect the data from the form fields//
    const firstName = document.querySelector("#first-name").value
    const lastName = document.querySelector("#last-name").value
    const email = document.querySelector("#email-address").value
    const phone = document.querySelector("#phone-number").value
    const birthday = document.querySelector("#birthday").value
    const department = document.querySelector("#department").value
    //check if the checkbox is checked
    const supervisor = document.getElementById("supervisor")
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