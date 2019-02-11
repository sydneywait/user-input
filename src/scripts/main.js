document.querySelector("#submit-btn").addEventListener("click", ()=>{
console.log("you clicked the button!")
//collect the date from the form fields//
const firstName = document.querySelector("#first-name").value
const lastName = document.querySelector("#last-name").value
const email = document.querySelector("#email-address").value
const phone = document.querySelector("#phone-number").value
const birthday = document.querySelector("#birthday").value
const department = document.querySelector("#department").value

const employeeObject = {

    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    birthday: birthday,
    department: department
}
console.log(employeeObject)



createEmployee(employeeObject)
})