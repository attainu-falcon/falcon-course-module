document.querySelector('button').addEventListener('click',calculator);

var displaylocation = document.querySelector('div');

function calculator(){

  var display = '';

  var a = document.querySelector('input').value;
  for(i=1; i<=10; i++) {
    var ans = i*a;
    display = display +i+' * '+a+' = '+ans+ '\n';
    displaylocation.innerText = display;
  }
}