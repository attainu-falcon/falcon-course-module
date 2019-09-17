function addListener(){
    var body = document.getElementsByTagName('body')[0];
    body.addEventListener("click", calculate, false);
}
function calculate(e){
    var operation = '';
    var operand1 = document.getElementById('first_operand').value;
    var operand2 = document.getElementById('second_operand').value;
    if (e.target !== e.currentTarget) {
        operation = e.target.id;
    }
    switch(operation){
        case 'add':
            document.getElementById("result").value = Number(operand1) + Number(operand2);
            break;
        case 'subtract':
            document.getElementById("result").value = operand1 - operand2;
            break;
        case 'multiply':
            document.getElementById("result").value = operand1 * operand2;
            break;
        case 'divide':
            document.getElementById("result").value = operand1 / operand2;
    }
    e.stopPropagation();
}