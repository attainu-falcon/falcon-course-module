function printTable(){
    var N = document.getElementById("number").value;
    if(N <= 0){
        alert("Please enter a valid number, for multiplication table");
    } else {
        var ans = "<br /><h3>Here is the table of " + N + "</h3> <br />";
        for(let i = 1; i <= 10; i++){
            ans += i + " * " + N + " = " + (N * i) + "<br />";
        }
        console.log(ans);
        var div = document.getElementById("table_div");
        div.innerHTML = div.innerHTML + ans;
        div.style.display = "block";
    }
}