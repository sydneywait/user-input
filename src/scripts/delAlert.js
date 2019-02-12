const delAlert = (employeeId) => {
    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Display the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    //look for a click event on the yes or no buttons in the modal
    document.querySelector("#myModal").addEventListener("click", () => {
        const answer = event.target.id.split("-")[0]
        if (answer === "yes") {
            delEmployee(employeeId).then(() => {
                printAllEmployees()
            })
            modal.style.display = "none";

        } else if (answer === "no") {
            modal.style.display = "none";
        }
    })
}