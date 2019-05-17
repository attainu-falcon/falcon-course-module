//inputs getting function

getValues=function(){
	number1=document.getElementById("number1").value;
	number2=document.getElementById("number2").value;

	resultObject = {
		"number1":number1,
		"number2":number2
	}

		return resultObject;

}


//Result displaying function block

showResult=function(result){
	resultElement=document.getElementById("result");
	resultElement.innerText=result
}


//Validating Inputs fields function

validInput=function(numberValues){
	if(numberValues.number1=="" || numberValues.number2==""){
		alert("Please fill both field for calculation");
		return false;
	}else{
		return true;
	}
}




//Addition block

plsBtn=document.getElementById("plsBtn");
plsOperation=function(){
	
	numberValues = getValues();

	if(numberValues.number1=="" || numberValues.number2==""){
		alert("Please fill both field for calculation");
		return false;
	}

	 sum=parseInt(numberValues.number1)+parseInt(numberValues.number2);
	 console.log(sum);
	 showResult(sum);
}
	plsBtn.addEventListener("click",plsOperation);


//Substraction block

minBtn=document.getElementById("minBtn");
subOperation=function(){
	
	numberValues = getValues();

if(numberValues.number1=="" || numberValues.number2==""){
		alert("Please fill both field for calculation");
		return false;
	}

	sub=parseInt(numberValues.number1)-parseInt(numberValues.number2);
	console.log(sub);
	showResult(sub);
}
	minBtn.addEventListener("click",subOperation);


//Multiplication block

mulBtn=document.getElementById("mulBtn");
mulOperation=function(){
	
	numberValues = getValues();

if(numberValues.number1=="" || numberValues.number2==""){
		alert("Please fill both field for calculation");
		return false;
	}

	mul=parseInt(numberValues.number1)*parseInt(numberValues.number2);
	console.log(mul);
	showResult(mul);
}
	mulBtn.addEventListener("click",mulOperation);


//Division block

divBtn=document.getElementById("divBtn");
divOperation=function(){
	
	numberValues = getValues();

if(numberValues.number1=="" || numberValues.number2==""){
		alert("Please fill both field for calculation");
		return false;
	}

	div=parseInt(numberValues.number1)/parseInt(numberValues.number2);
	console.log(div);
	showResult(div);
}
	divBtn.addEventListener("click",divOperation);
