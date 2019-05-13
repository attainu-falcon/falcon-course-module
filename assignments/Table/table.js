var button = document.querySelector("button");
var table = document.querySelector("ul");
//console.log(button);
button.addEventListener('click', multiplicationTable);


function multiplicationTable(){
  var input = document.getElementById("input-number");
  var inputValue = input.value;
  var print = '';
  if (inputValue != ''){
  for(var i=1; i<11; i++){
    print = print + '<li>' + inputValue + '    *    ' + i + '    =    ' + inputValue*i + '</li>';
    }
    //console.log(print);
    table.innerHTML = print;
    table.style = "position:absolute;list-style-type:none;top: calc( 50% + 50px );margin-top:10px;padding:2px;background:rgba(255, 166, 0, 0.1);height:200px;width:200px;"
    }
}


//so, even though you have set input type as number
//console.log(input) will be --- HTMLInputElement {}
//input.value --- is a string
//i.e, .value is of string format 
