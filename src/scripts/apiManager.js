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
        .then(allEmployees => {
            allEmployees.forEach(employee => {
                buildEmployee("employee-cards", employee)

            })
        })


}



