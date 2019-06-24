function isEqual() 
{ 
 var a = [1, 2, 3, 5]; 
 var b = [1, 2, 3, 5];
  if(a.length!=b.length) 
   return "False"; 
  else
  { 
   for(var i=0;i<a.length;i++) 
   if(a[i]!=b[i]) 
    return "False"; 
    return "True"; 
  } 
} 
var v = isEqual(); 
console.log(v);
