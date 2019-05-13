function multiplier() {
     var a = document.querySelector('input').value;
     for(var i = 1; i <= 10; i++){
        document.querySelector('.results').innerHTML += i +' * '+ a +' = '+ a*i +"<br/>" ;
    }
}

document.querySelector('button').addEventListener('click', multiplier);
document.addEventListener('keypress', function(event){
  if (event.keypress === 13 || event.which === 13){
               multiplier();
  }
});
