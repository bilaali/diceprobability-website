
    function rollDice(){

    // Initialize the outcome counts to zero
    let dice1outcome1Count = 0;
    let dice1outcome2Count = 0;
    let dice1outcome3Count = 0;
    let dice1outcome4Count = 0;
    let dice1outcome5Count = 0;
    let dice1outcome6Count = 0;
    let dice2outcome1Count = 0;
    let dice2outcome2Count = 0;
    let dice2outcome3Count = 0;
    let dice2outcome4Count = 0;
    let dice2outcome5Count = 0;
    let dice2outcome6Count = 0;

    let Count2=0;
    let Count3=0;
    let Count4=0;
    let Count5=0;
    let Count6=0;
    let Count7=0;
    let Count8=0;
    let Count9=0;
    let Count10=0;
    let Count11=0;
    let Count12=0;

    let dice1Input;
    let dice2Input;
    
    dice1Input = parseInt(document.getElementById("dice1").value);
    dice2Input = parseInt(document.getElementById("dice2").value);
      
       // Increment the outcome counts
      if (dice1Input == 1) {
          dice1outcome1Count++;
      } else if (dice1Input == 2) {
          dice1outcome2Count++;
      } else if (dice1Input == 3) {
          dice1outcome3Count++;
      } else if (dice1Input == 4) {
          dice1outcome4Count++;
      } else if (dice1Input == 5) {
          dice1outcome5Count++;
      } else if (dice1Input == 6) {
          dice1outcome6Count++;
      }

      if (dice2Input == 1) {
          dice2outcome1Count++;
      } else if (dice2Input == 2) {
          dice2outcome2Count++;
      } else if (dice2Input == 3) {
          dice2outcome3Count++;
      } else if (dice2Input == 4) {
          dice2outcome4Count++;
      } else if (dice2Input == 5) {
          dice2outcome5Count++;
      } else if (dice2Input == 6) {
          dice2outcome6Count++;
      }


      // Increment the dice sum count
if (dice1Input + dice2Input == 2) {
    Count2 += 1;
} else if (dice1Input + dice2Input == 3) {
    Count3 += 1;
} else if (dice1Input + dice2Input == 4) {
    Count4 += 1;
} else if (dice1Input + dice2Input == 5) {
    Count5 += 1;
} else if (dice1Input + dice2Input == 6) {
    Count6 += 1;
} else if (dice1Input + dice2Input == 7) {
    Count7 += 1;
} else if (dice1Input + dice2Input == 8) {
    Count8 += 1;
} else if (dice1Input + dice2Input == 9) {
    Count9 += 1;
} else if (dice1Input + dice2Input == 10) {
    Count10 += 1;
} else if (dice1Input + dice2Input == 11) {
    Count11 += 1;
} else if (dice1Input + dice2Input == 12) {
    Count12 += 1;
}

            // Update the outcome count table for dice 1
    document.getElementById("d1out1").innerHTML = parseInt(document.getElementById("d1out1").innerHTML)+dice1outcome1Count;
    document.getElementById("d1out2").innerHTML = parseInt(document.getElementById("d1out2").innerHTML)+dice1outcome2Count;
    document.getElementById("d1out3").innerHTML = parseInt(document.getElementById("d1out3").innerHTML)+dice1outcome3Count;
    document.getElementById("d1out4").innerHTML = parseInt(document.getElementById("d1out4").innerHTML)+dice1outcome4Count;
    document.getElementById("d1out5").innerHTML = parseInt(document.getElementById("d1out5").innerHTML)+dice1outcome5Count;
    document.getElementById("d1out6").innerHTML = parseInt(document.getElementById("d1out6").innerHTML)+dice1outcome6Count;

        // Update the outcome count table for dice 2
        document.getElementById("d2out1").innerHTML = parseInt(document.getElementById("d2out1").innerHTML)+dice2outcome1Count;
        document.getElementById("d2out2").innerHTML = parseInt(document.getElementById("d2out2").innerHTML)+dice2outcome2Count;
        document.getElementById("d2out3").innerHTML = parseInt(document.getElementById("d2out3").innerHTML)+dice2outcome3Count;
        document.getElementById("d2out4").innerHTML = parseInt(document.getElementById("d2out4").innerHTML)+dice2outcome4Count;
        document.getElementById("d2out5").innerHTML = parseInt(document.getElementById("d2out5").innerHTML)+dice2outcome5Count;
        document.getElementById("d2out6").innerHTML = parseInt(document.getElementById("d2out6").innerHTML)+dice2outcome6Count;
    
        // Update the outcome count table for dice sum
        document.getElementById("sum2").innerHTML = parseInt(document.getElementById("sum2").innerHTML)+Count2;
        document.getElementById("sum3").innerHTML = parseInt(document.getElementById("sum3").innerHTML)+Count3;
        document.getElementById("sum4").innerHTML = parseInt(document.getElementById("sum4").innerHTML)+Count4;
        document.getElementById("sum5").innerHTML = parseInt(document.getElementById("sum5").innerHTML)+Count5;
        document.getElementById("sum6").innerHTML = parseInt(document.getElementById("sum6").innerHTML)+Count6;
        document.getElementById("sum7").innerHTML = parseInt(document.getElementById("sum7").innerHTML)+Count7;
        document.getElementById("sum8").innerHTML = parseInt(document.getElementById("sum8").innerHTML)+Count8;
        document.getElementById("sum9").innerHTML = parseInt(document.getElementById("sum9").innerHTML)+Count9;
        document.getElementById("sum10").innerHTML = parseInt(document.getElementById("sum10").innerHTML)+Count10;
        document.getElementById("sum11").innerHTML = parseInt(document.getElementById("sum11").innerHTML)+Count11;
        document.getElementById("sum12").innerHTML = parseInt(document.getElementById("sum12").innerHTML)+Count12;
      


    }

    