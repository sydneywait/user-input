
document.querySelector("#submit-btn").addEventListener("click", () => {
    console.log("you clicked the button!")
    //collect the date from the form fields//
    const firstName = document.querySelector("#first-name").value
    const lastName = document.querySelector("#last-name").value
    const email = document.querySelector("#email-address").value
    const phone = document.querySelector("#phone-number").value
    const birthday = document.querySelector("#birthday").value
    const department = document.querySelector("#department").value
    const supervisor = document.getElementById("#supervisor").value
    const gender = document.querySelector("input[name = \"gender\"]:checked").value
    console.log("this is the gender", gender)

    const employeeObject = buildEmployeeObject(firstName, lastName, email, phone, birthday, department, supervisor, gender)
    createEmployee(employeeObject).then(() => {
        postAllEmployees()
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



})

document.querySelector("#show-all-btn").addEventListener("click", () => {
    postAllEmployees()


})

document.querySelector("#employee-cards").addEventListener("click", () => {
    const employeeId = event.target.id.split("-")[2]
    delEmployee(employeeId).then(() => {
        postAllEmployees()
    })


})