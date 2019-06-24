//addition
document.getElementById('addition').addEventListener('click', add);

function add(){
      var v1 = parseInt(document.getElementById('inp1').value)
      var v2 = parseInt(document.getElementById('inp2').value)
    document.getElementById('output').innerText = v1 + v2;
}

//subtraction
document.getElementById('sub').addEventListener('click', subtract);

function subtract(){
      var v1 = parseInt(document.getElementById('inp1').value)
      var v2 = parseInt(document.getElementById('inp2').value)
    document.getElementById('output').innerText = v1 - v2;
}

//multiplication
document.getElementById('mul').addEventListener('click', multiply);

function multiply(){
      var v1 = parseInt(document.getElementById('inp1').value)
      var v2 = parseInt(document.getElementById('inp2').value)
    document.getElementById('output').innerText = v1 * v2;
}

//division
document.getElementById('div').addEventListener('click', divide);

function divide(){
      var v1 = parseInt(document.getElementById('inp1').value)
      var v2 = parseInt(document.getElementById('inp2').value)
    document.getElementById('output').innerText = v1 / v2;
}