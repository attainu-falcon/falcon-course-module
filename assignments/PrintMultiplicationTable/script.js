var tableList = document.querySelector('ul');
document.querySelector('button').addEventListener('click', printTable);
function printTable() {
  var table = '';
  var inputNumber = document.querySelector('input').value;
  for(i=1;i<=10;i++) {
    var ans = i*inputNumber;
    table = table + '<li>'+i+' * '+inputNumber+' = '+ans+'</li>';
  }
  tableList.innerHTML = table;
}