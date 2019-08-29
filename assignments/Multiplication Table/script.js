document.querySelector('button').addEventListener('click', myFunction);

function myFunction(){
  var val = document.querySelector('input').value
  document.getElementById('result').innerHTML = ""
  for (var i=1; i<11; i++){
    document.getElementById('result').innerHTML += i + ' * '+ val + ' = ' + val * i +"<br>";
  }
  
}
