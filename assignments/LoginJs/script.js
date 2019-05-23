var usrname="user_123";
var password="password";


function check()
{
var user=document.login.user.value;
var psw=document.login.pass.value;

 for(var i=0; i<user.length;i++)
    {
      
      var indx=user.charCodeAt(i);
     if (!(indx>47 && indx <58) && !(indx>64 && indx <91) && !(indx>96 && indx<123) && !(indx == 95))
      {
       alert('Username can contain only letters, digits, underscore(_)');
       return false;
      }

    }
   if(psw.length<8)
    {
      alert("Password must contain 8 or more characters");
      return false;
    }
else if(user.length<6)
    {
      alert("Username must contain 6 or more characters");
      return false;
    }
else if(user[0]>=0)
    {
        alert("Username cannot start with a digit");
        return false;
    }
    
    else if(user !== usrname)
    {
        alert("Incorrect Username or Password");
        return false;
    }
    else if(password !== psw)
    {
        alert("Incorrect Username or Password");
        return false;
    }
    else
    {
      alert("Logged in successfully");
      return true;
    }
   

}
