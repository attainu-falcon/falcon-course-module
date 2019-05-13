function MultiplicationTable(){
    var num;
    
    
    num=Number(document.getElementById('number').value); 
  
    
        document.getElementById("out").innerHTML = "";

    for(var i=1; i<=10; i++)
    { 
        var a= document.getElementById('out');
    
    
    
       a.innerHTML += num +"    *    " + i + "   =   " + num*i + "<br/>"   ;
       
    }

    
    
}
function reset(){
    document.getElementById("out").innerHTML = "";

}