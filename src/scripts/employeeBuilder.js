const buildEmployeeObject = (firstName, lastName, email, phone, birthday, department, supervisor, gender)=>{
    const employeeObject = {

        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        birthday: birthday,
        department: department,
        supervisor: supervisor,
        gender: gender,

    }

    return employeeObject;
}

const buildEmployeeString =(id,object)=>{
    let image ="";

    if(object.gender ==="male"){
        image = "https://tricityescaperooms.com/wp-content/uploads/2018/01/person-placeholder-male-5-300x300.jpg"
    }
    else if(object.gender==="female"){
        image ="https://medmc.ca/wp-content/uploads/2018/08/person-placeholder-female.jpg"
    }
let superClass=""
    if(object.supervisor==="Yes"){
        superClass = "supervisor"

    }
    else if (object.supervisor==="No"){
        superClass="employee"
    }

return document.querySelector(`#${id}`).innerHTML+=`<div class="card ${superClass}" style="width: 200px;">
  <img src="${image}" width = "200px" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${object.firstName} ${object.lastName}</h4>
    <p class="dept-title">${object.department}</p>
    <p class="card-email">Email: ${object.email}</p>
    <p class="card-phone">Phone: ${object.phone}</p>
    <p class="card-bday">Birthday: ${object.birthday}</p>
    <button class="btn edit-btn" id = "edit-btn-${object.id}">edit</button>
    <button class="btn delete-btn" id = "delete-btn-${object.id}">delete</button>
  </div>
</div>`

}