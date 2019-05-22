 var i, j;
  //outer loop
  for(i=1; i <= 5; i++)
   {
     var string = "";
    
   //inner loop
    for(j=1; j<=i; j++)
   {
    string=string+"*";
    }
     console.log(string);
   }

   
  var i, j;
  //outer loop
  for(i=5;i>=1;i--)
   {
   var string = "";

   //inner loop
    for(j=1;j<=i;j++)
   {
     string=string+"*";
    }
     console.log(string);
   }