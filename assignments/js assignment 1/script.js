document.getElementById('sai').addEventListener(
'click',function(){
var n = document.getElementById('input').value;
document.getElementById('div').innerText="";
for(var i=1;i<=10;i++){
var tablestring=document.getElementById('div').innerText;
document.getElementById('div').innerText=tablestring+ n +" * "+i +" = "+ (n*i)+'\n';
}
}
)