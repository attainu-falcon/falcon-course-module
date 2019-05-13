
document.querySelector('button').addEventListener('click',multiplicationTable);
function multiplicationTable(){
var num=document.getElementById("input-box").value;
  var Table=document.getElementById("Table");
  
  var result='';

for(var i=1;i<=10;i++){
  var output=i*num;
  result=result+'<li>'+i+'*'+num+'='+output+'</li>'
  }
  console.log(result);
  console.log(Table);
Table.innerHTML=result;
}