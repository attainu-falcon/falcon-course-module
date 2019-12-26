function Initials(name) {
    var initial, i, n;
    initial = name.charAt(0);
    n = name.length;
  
    for (i=1; i<n; i++){
      if (name.charAt(i) == ' ') {
        initial = initial + name.charAt(i+1);
        }
    }
    console.log(initial);
  }
  
Initials('Mahendra Singh Dhoni');
Initials("Shah Rukh Khan");