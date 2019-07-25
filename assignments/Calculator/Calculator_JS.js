

    function add() {
        var x = document.getElementById('first').value;
        var y=  document.getElementById('second').value;
        z= +x + +y;
        document.getElementById("result").value = z;
      }

      function mul() {
        var x = document.getElementById('first').value;
        var y=  document.getElementById('second').value;
        z= x*y;
        document.getElementById("result").value = z;
      }
      function divide() {
        var x = document.getElementById('first').value;
        var y=  document.getElementById('second').value;
        z=x/y;
        document.getElementById("result").value = z;
      }
      function minus() {
        var x = document.getElementById('first').value;
        var y=  document.getElementById('second').value;
        z= x-y;
        document.getElementById("result").value = z;
      } 
