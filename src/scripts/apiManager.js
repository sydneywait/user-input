const createEmployee = (employeeObject) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
    })
}

const postAllEmployees = () => {
    document.querySelector("#employee-cards").innerHTML = ""
    return fetch("http://localhost:8088/employees")
        .then(employees => employees.json())
        .then(allEmployees => {
            allEmployees.forEach(employee => {
                buildEmployeeString("employee-cards", employee)
            })
        })
}


const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(employees => employees.json())
}

const queryAllEmployees = (searchTerm) => {
    document.querySelector("#employee-cards").innerHTML = ""
    return fetch(`http://localhost:8088/employees?q=${searchTerm}`)
        .then(employees => employees.json())
        .then(allEmployees => {
            allEmployees.forEach(employee => {
                buildEmployeeString("employee-cards", employee)
            })
        })
}

const delEmployee = (employeeId) =>{
return fetch(`http://localhost:8088/employees/${employeeId}`,{

method: "DELETE"

})
}

// const putEmployee = (employeeId) =>{
//     return fetch(`http://localhost:8088/employees/${employeeId}`,{

//     method: "PUT"

//     })
//     }


