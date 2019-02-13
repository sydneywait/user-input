const buildEmployeeObject = (firstName, lastName, email, phone, birthday, department, supervisor, gender) => {
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


const buildEmployeeString = (id, object) => {
    let image = "";

    if (object.gender === "male") {
        image = "https://tricityescaperooms.com/wp-content/uploads/2018/01/person-placeholder-male-5-300x300.jpg"
    }
    else if (object.gender === "female") {
        image = "https://medmc.ca/wp-content/uploads/2018/08/person-placeholder-female.jpg"
    }
    else if (object.gender === "other") {

        image = "https://ae01.alicdn.com/kf/HTB1lZEUNFXXXXbtXFXXq6xXFXXXH/Full-diamond-sets-unfinish-decorative-Diy-Diamond-painting-animal-Diamond-embroidery-unicorn-5D-diamond-cross-stitch.jpg"
    }
    let superClass = ""
    if (object.supervisor === "Yes") {
        superClass = "supervisor"

    }
    else if (object.supervisor === "No") {
        superClass = "employee"
    }
    const dateString = reformatDate(object.birthday)

    return document.querySelector(`#${id}`).innerHTML += `<div class="card ${superClass}" id = "employee-${object.id}" style="width: 200px;">
  <div class = "card-image"><img src="${image}" width = "180px" class="card-img-top" alt="..."></div>
  <div class="card-body" id="card-${object.id}">
    <h4 class="card-title">${object.firstName} ${object.lastName}</h4>
    <p class="dept-title">${object.department}</p>
    <p class="card-email">Email: ${object.email}</p>
    <p class="card-phone">Phone: ${object.phone}</p>
    <p class="card-bday">Birthday: ${dateString}</p>
  </div>
  <div class ="card-btn-container">
    <div class = "icon2"><i class="fas fa-edit fa-3x" id = "edit-btn-${object.id}"></i></div>
    <div class = "icon2"><i class="fas fa-minus-square fa-3x" id = "delete-btn-${object.id}"></i></div>
  </div>
</div>`

}