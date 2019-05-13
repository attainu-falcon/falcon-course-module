function mul(){
    var num=document.getElementById("getnum").value;
    num = parseInt(num);
    var table = document.getElementById('printtable');
    if(table){
       table.innerHTML='';
    }
    for(i=1;i<=10;i++) {
        
        table.innerHTML +=  num + " x " + i + " = " + num*i +"<br>";
    }
    
    }