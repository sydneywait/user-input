// event listener on the submit button to collect data from the form and put it into the DB, then the DOM
document.querySelector("#submit-btn").addEventListener("click", () => {
    const employeeObject = collectData("#first-name", "#last-name", "#email-address", "#phone-number", "#birthday", "#department", "supervisor")
    createEmployee(employeeObject).then(() => {
        printAllEmployees()
    })

})
// Event listener on the search button (queries by name, department etc)
document.querySelector("#search-name-btn").addEventListener("click", () => {
    const searchTerm = document.querySelector("#search-name").value
    queryAllEmployees(searchTerm)
})

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

        // check to see if the delete button was clicked
    } else if (targeted === "edit") {
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
        const employeeObject = collectData(`#first-name-edit-${employeeId}`, `#last-name-edit-${employeeId}`, `#email-address-edit-${employeeId}`, `#phone-number-edit-${employeeId}`, `#birthday-edit-${employeeId}`, `#department-edit-${employeeId}`, `supervisor-edit-${employeeId}`)

        putEmployee(employeeObject, employeeId).then(() => {
            printAllEmployees()


        })
        // add event listener on the exit button in the cards
    } else if (targeted === "exit") {
        console.log("exit employee", event.target.id)
        const employeeId = event.target.id.split("-")[3]
        printAllEmployees()

    }
})