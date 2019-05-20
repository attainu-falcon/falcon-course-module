function isEqual() 
{ 
 var a = [1, 2, 3, 5]; 
 var b = [1, 2, 3, 5]; 
  // if length is not equal 
  if(a.length!=b.length) 
   return "False"; 
  else
  { 
  // comapring each element of array 
   for(var i=0;i<a.length;i++) 
   if(a[i]!=b[i]) 
    return "False"; 
    return "True"; 
  } 
} 
var v = isEqual(); 
console.log(v); 
