function myFunction(){
    var un =document.forms["loginForm"]["username"].value;
    var pw =document.forms["loginForm"]["password"].value;
    if((un!=""&&pw!="")){
        alert("Success!");
    }
    else{
        alert("Invalid Username and password");
    }
}