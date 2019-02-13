const createEmployee = (employeeObject) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
    })
}
const getAllEmployees = () => {
    document.querySelector("#employee-cards").innerHTML = ""
    return fetch("http://localhost:8088/employees")
        .then(employees => employees.json())
}

const printAllEmployees = () => {
    document.querySelector("#employee-cards").innerHTML = ""
    getAllEmployees()
        .then((allEmployees => {
            allEmployees.forEach(employee => {
                buildEmployeeString("employee-cards", employee)
            })
        })
        )
}

const printAllSupervisors = () => {
    getAllEmployees()
        .then((allEmployees => {
            allEmployees.forEach(employee => {
                if (employee.supervisor === "Yes")
                    buildEmployeeString("employee-cards", employee)
            })
        })
        )
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

const delEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {

        method: "DELETE"

    })
}

const getOneEmployee =(employeeId) => {
    document.querySelector(`#employee-${employeeId}`).innerHTML = ""
    return fetch(`http://localhost:8088/employees/${employeeId}`)
    .then(employee=>employee.json())
}



const putEmployee = (employeeObject, employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
    method: "PUT",
    headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
        })
    }




