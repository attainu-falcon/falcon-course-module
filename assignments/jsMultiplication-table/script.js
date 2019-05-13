function printTable(num) {
        var input= num.value;
        if(!isNaN(input)){
            var table="";
            var number="";
            for(i=1;i<=input;i++) {
            number = input * i;
            table += i + " * " + input + " = " +number+"<br/>";
        }
            document.getElementById("mul").innerHTML= table;
        }
        else {
            document.getElementById("mul").innerHTML= "Enter a Number";
        }
    }