//jquery
$(document).ready(function(){
$("#pic").click(function(){
        $("#effect").slideToggle();
     });
});

//javascript
function validateForm() {
    var emailValidate = document.getElementById("email").value;
    if (emailValidate == "") {
        alert("Insert a valid email");
        return false;
    }
}
