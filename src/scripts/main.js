
document.querySelector("#submit-btn").addEventListener("click", () => {
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
})

document.querySelector("#search-name-btn").addEventListener("click", () => {
    const searchTerm = document.querySelector("#search-name").value
    queryAllEmployees(searchTerm)
})

document.querySelector("#search-dept-btn").addEventListener("click", () => {
    const searchTerm = document.querySelector("#search-department").value
    queryAllEmployees(searchTerm)
})

document.querySelector("#show-super-btn").addEventListener("click", () => {
    printAllSupervisors()
})

document.querySelector("#show-all-btn").addEventListener("click", () => {
    printAllEmployees()
})

document.querySelector("#employee-cards").addEventListener("click", () => {
    // check to see if the delete or edit button was clicked
    const targeted = event.target.id.split("-")[0]
    if (targeted === "delete") {
        const employeeId = event.target.id.split("-")[2]
        delAlert(employeeId)
    }
    else if (targeted === "edit") {
        const employeeId = event.target.id.split("-")[2]
        getOneEmployee(employeeId)
        .then((singleEmployeeInfo)=> {
            console.log(singleEmployeeInfo)

            document.querySelector(`#employee-${employeeId}`).innerHTML = buildEditForm(singleEmployeeInfo)

        })
    }
})



