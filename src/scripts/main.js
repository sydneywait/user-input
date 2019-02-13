
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
// Event listener on the search button (queries by name, department etc)
document.querySelector("#search-name-btn").addEventListener("click", () => {
    const searchTerm = document.querySelector("#search-name").value
    queryAllEmployees(searchTerm)
})

// document.querySelector("#search-dept-btn").addEventListener("click", () => {
//     const searchTerm = document.querySelector("#search-department").value
//     queryAllEmployees(searchTerm)
// })

// event listener on the "show Supervisors" button
document.querySelector("#show-super-btn").addEventListener("click", () => {
    printAllSupervisors()
})
// event listener on the "show all employees" button
document.querySelector("#show-all-btn").addEventListener("click", () => {
    printAllEmployees()
})

//event listeners on the employee cards, looking at 4 different targets to delete, edit, save, or exit
document.querySelector("#employee-cards").addEventListener("click", () => {
    // check to see if the delete button was clicked
    const targeted = event.target.id.split("-")[0]
    if (targeted === "delete") {
        const employeeId = event.target.id.split("-")[2]
        delAlert(employeeId)
    }
    // check to see if the delete button was clicked
    else if (targeted === "edit") {
        const employeeId = event.target.id.split("-")[2]
        // target the specific employee based on the ID number, fetch their info
        getOneEmployee(employeeId)
            .then((singleEmployeeInfo) => {
                console.log(singleEmployeeInfo)
                // Show a pop-up in the card that allows you to edit the fields
                document.querySelector(`#employee-${employeeId}`).innerHTML = buildEditForm(singleEmployeeInfo)
            })
        // add event listener on the save button in the cards
    } else if (targeted === "save") {
        console.log("save employee", event.target.id)
        const employeeId = event.target.id.split("-")[3]

        // add event listener on the exit button in the cards
    } else if (targeted === "exit") {
        console.log("exit employee", event.target.id)
        const employeeId = event.target.id.split("-")[3]
        printAllEmployees()

    }
})




