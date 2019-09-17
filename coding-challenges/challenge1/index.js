var players = [
    { name: "Roger Federer", rank: 1 },
    { name: "Rafel Nadal", rank: 2 },
    { name: "Nalbandian", rank: 12 },
    { name: "Andy Murray", rank: 14 },
    { name: "Andy Roddick", rank: 4 },
    { name: "Pete Sampras", rank: 3 },
    { name: "Rod Laver", rank: 190 },
    { name: "Andre Agassi", rank: 11 },
    { name: "Novak Djokovic", rank: 5 },
    { name: "Arthur Ashe", rank: 8 },
    ];
    
    /*
    for(let i = 0; i < players.length; i++){
      let temp = players[i];
      if(temp['rank'] <= 10)
        console.log(temp['name']);
    }
    */
    players.forEach(
      item => item['rank'] <= 10 ? console.log(item['name']):false
    );