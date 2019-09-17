function showInitials(){
    // Clearing previous input.
    document.getElementById("answer").innerHTML = "";
    
    // Getting value from input element.
    var name = document.getElementById("name").value;
    
    // Checking if user has provided value.
    if(name.trim() == ''){
      alert("please enter valid name");
    } else { //Else processing the input.
      // Splitting input to parts of name.
      name = name.split(" ");
      ans = '<h3>Your Initials of name is: </h3>'
      name.forEach(
        item => ans += item[0]
      );
      document.getElementById("answer").innerHTML = ans;
    }
  }