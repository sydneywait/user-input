const buildEmployee =(id,object)=>{
return document.querySelector(`#${id}`).innerHTML+=`<div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDHGbmeO_n4BngHukOBOaSZ-ojh1V6iVq1WsUCUuDZKCHs3iZ" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${object.firstName} ${object.lastName}</h5>
    <p class="card-text">Department: ${object.department}</p>
    <p class="card-text">Email: ${object.email}</p>
    <p class="card-text">Phone: ${object.phone}</p>
    <p class="card-text">Birthday: ${object.birthday}</p>
    <a href="#" class="btn delete-btn">delete</a>
  </div>
</div>`

}