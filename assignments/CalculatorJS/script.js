document.getElementById('add1').addEventListener('click',myfunction);

var displaylocation = document.getElementById('result1');

function myfunction(){

  var a = parseInt(document.getElementById('input1').value);

  var b = parseInt(document.getElementById('input2').value);
  var answer = a+b;
  display = answer;
  displaylocation.innerText = display;
};

document.getElementById('subtract1').addEventListener('click',myfunction1);

var displaylocation = document.getElementById('result1');

function myfunction1(){

  var a = parseInt(document.getElementById('input1').value);

  var b = parseInt(document.getElementById('input2').value);

  var answer = a-b;
  display = answer;
  displaylocation.innerText = display;
};

document.getElementById('multiply1').addEventListener('click',myfunction2);

var displaylocation = document.getElementById('result1');

function myfunction2(){

  var a = parseInt(document.getElementById('input1').value);

  var b = parseInt(document.getElementById('input2').value);

  var answer = a*b;
  display = answer;
  displaylocation.innerText = display;
};

document.getElementById('divide1').addEventListener('click',myfunction3);

var displaylocation = document.getElementById('result1');

function myfunction3(){

  var a = parseInt(document.getElementById('input1').value);

  var b = parseInt(document.getElementById('input2').value);

  var answer = a/b;
  display = answer;
  displaylocation.innerText = display;
};