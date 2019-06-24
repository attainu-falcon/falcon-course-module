function printSquares()
{
var i;
var table = document.createElement('table');
document.querySelector('body').appendChild(table);
table.style.border = "2px solid black"

for (i=0;i<=10;i++)
{
	var row = document.createElement('tr');
	table.appendChild(row);
  var number,square ;
 
 if(i==0){
   number = document.createElement('th');
   number.style.backgroundColor = "white";
   number.style.color = "black";
   var text = document.createTextNode("Numbers");
   number.appendChild(text);

   square= document.createElement('th');
   square.style.backgroundColor = "white";
   square.style.color = "Black";
   square.textContent="Squares";
 }
 else{
   number=document.createElement('td');
   if(i%2==0)
   number.style.backgroundColor = "white";
   else 
     number.style.backgroundColor = "grey";
   number.style.width = "100px";
   number.style.textAlign = "center";
   number.textContent = i;
   square = document.createElement('td');
   if(i%2==0)
   square.style.backgroundColor = "white";
   else 
     square.style.backgroundColor = "grey";
   square.style.width = "100px";
   square.style.textAlign = "center";
   square.textContent = i*i;
   
 }
 
 row.appendChild(number);
 row.appendChild(square);
}
}

printSquares();