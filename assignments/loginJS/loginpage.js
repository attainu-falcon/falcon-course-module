
    //method giveValue() for inputs

 giveValue = () => {

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

     values = {
        username: username,
        password: password
    }
    return values;
}
/* 
    validate() empty fields
*/
 validate = (username, password) => {

    if (username == "" || password == "") {
        return false;
    }
    return true;
}
/* 
  login() checks whether username and password is valid or not 
  If username = "sidd" and password ="8457" 
  show  successfull message or
  invalid message
*/
     login = () => {
    event.preventDefault();

     username = giveValue().username;
     password = giveValue().password;

    if (validate(username, password)) {
        if (username == "sidd" && password == "8457") {
           
            displayMessage("success")
        }
        else {
            
            displayMessage("error")
        }
    }
    else {
        alert("Please enter valid username or password")
    }

}
/*
  displayMessage() display message by taking inputs

*/
    displayMessage = (message)=>{
    if(message === "success" || message === ""){
       
         error =  document.getElementById("error");
        if (window.getComputedStyle(error).display === "block") {
            error.style.display = "none";
        }
        document.getElementById("success").style.display = "block"
    }
    if(message === "error" || message === ""){
      
         success =  document.getElementById("success");
        if (window.getComputedStyle(success).display === "block") {
            success.style.display = "none";
        }
        document.getElementById("error").style.display = "block"
    }
    
    
}
/*

Handle login button click it executed login function 
*/
document.getElementById("button").addEventListener("click", login);