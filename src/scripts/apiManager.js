// ============ CREATE EMPLOYEE IN DATABASE============= //
const createEmployee = (employeeObject) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
    })
}
// ========== FETCH ALL EMPLOYEES IN DATABASE=========== //
const getAllEmployees = () => {
    document.querySelector("#employee-cards").innerHTML = ""
    return fetch("http://localhost:8088/employees?_sort=lastName,firstName&order=asc")
        .then(employees => employees.json())
}
// ========== PRINT ALL EMPLOYEES IN DATABASE=========== //
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
// ========= PRINT ALL SUPERVISORS IN DATABASE========== //
const printAllSupervisors = () => {
    document.querySelector("#employee-cards").innerHTML = ""
    getAllEmployees()
        .then((allEmployees => {
            allEmployees.forEach(employee => {
                if (employee.supervisor === "Yes")
                    buildEmployeeString("employee-cards", employee)
            })
        })
        )
}
// ========== SEARCH ALL EMPLOYEES IN DATABASE=========== //
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
// ========== FETCH SINGLE EMPLOYEE =========== //
const getOneEmployee =(employeeId) => {
    document.querySelector(`#employee-${employeeId}`).innerHTML = ""
    return fetch(`http://localhost:8088/employees/${employeeId}`)
    .then(employee=>employee.json())
}
// ========== PUT (EDIT) SINGLE EMPLOYEE =========== //
const putEmployee = (employeeObject, employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
    method: "PUT",
    headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
        })
    }
// ========== DELETE SINGLE EMPLOYEE =========== //
const delEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {

        method: "DELETE"

    })
}






