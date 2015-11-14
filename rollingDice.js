 function rollDice(){
        var diceTotal;
        var d1 = document.getElementById("dice1").innerHTML = Math.floor(Math.random() * 6) +1;
        var d2 = document.getElementById("dice2").innerHTML = Math.floor(Math.random() * 6) +1;
       diceTotal = d1 + d2;
       document.getElementById("status").innerHTML = "You just rolled "+diceTotal+".";
    }
