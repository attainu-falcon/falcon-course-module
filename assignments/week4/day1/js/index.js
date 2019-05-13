function printTable(){
    var N = document.getElementById("number").value;
    var ans = "<br /><h3>Here is the table of " + N + "</h3> <br />";
    for(let i = 1; i <= 10; i++){
        ans += i.toString() + " * " + N.toString() + " = " + (N * i).toString() + "<br />";
    }
    console.log(ans);
    var div = document.getElementById("table_div");
    div.innerHTML = div.innerHTML + ans;
}