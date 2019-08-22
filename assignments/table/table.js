document.querySelector('button').addEventListener('click', myFunction);


 function myFunction(){
    document.getElementById('result').innerHTML=" "
  var val = document.querySelector('input').value
  var res = "";
  for (var i=1; i<11; i++){
    document.getElementById('result').innerHTML += i + ' * '+ val + ' = ' + val * i +"<br>";
  }

 }