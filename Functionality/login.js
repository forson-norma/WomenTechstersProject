function myFunction(){
    var un =document.forms["loginForm"]["username"].value;
    var pw =document.forms["loginForm"]["password"].value;
    var em =document.forms["loginForm"]["email"].value;
    if((un!=""&&pw!=""&&em.includes("admin"))){
        window.location.href="Framework/Admin.html";
    }
    else{
        alert("Invalid Username and password");
    }
}