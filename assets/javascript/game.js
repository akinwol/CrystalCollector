
$(document).ready(function(){

    // variable to store number to guess btwn 19-120

    var rando = $(".guessnumber");
    var randomNumberFrom = Math.floor((Math.random() * 3) + 10);;
    var crystalNumbers = [2, 4, 6, 8];
    var total = 0;
    var wins = 0;
    var loss = 0;
    
    
    // var crystalOne = 0;
    // var crystalTwo = 0;
    // var crystalThree = 0;

    console.log(crystalNumbers);
    

    function randomNumber() {
        randomNumberFrom =  Math.floor((Math.random() * 101) + 19);
    //    This does not work when I put it in here 
    //  rando.text(randomNumberFrom)
        // console.log("value: " +  randomNumberFrom);
        // crystalNumbers.forEach(function(){
        //     crystalNumbers = Math.floor((Math.random() * 101) + 19);

        // generate random numbers for each crystal 
            for (var i = 0; i < crystalNumbers.length; i++) {
              crystalNumbers[i] = Math.floor((Math.random() * 12) + 1);
            };
            console.log("crystal numbers: " +  crystalNumbers);
           
        total = 0;
       
    };

      // Function for checking total 

      function checkTotal() {
          if (total == randomNumberFrom) {
            alert("you win");
            wins++;
            randomNumber();
            update();
          };

          if (total > randomNumberFrom){
              alert("you lost");
              loss++;
              randomNumber();
              update();
          }
          
      };

//    function for clicking on the blue crystal
    $('#bluecrystal').on('click', function (){
        total += crystalNumbers[0];
        $('.totalamount').text(total);
        checkTotal();
       
        // console.log("your new total: " + total)
    });
    
    // function for clicking on the green crystal 
    $('#greencrystal').on('click', function (){
        total += crystalNumbers[1];
        $('.totalamount').text(total);
        checkTotal();
    });

     // function for clicking on the red crystal 
     $('#redcrystal').on('click', function (){
        total += crystalNumbers[2];
        $('.totalamount').text(total);
        checkTotal();
    });

     // function for clicking on the yellow crystal 
     $('#yellowcrystal').on('click', function (){
        total += crystalNumbers[3];
        $('.totalamount').text(total);
        checkTotal();
    });

    function update() {
        rando.text(randomNumberFrom);
        $(".totalamount").text(total);
        $(".winamount").text(wins);
        $(".lossamount").text(loss);
        console.log($('#crystal-1').attr('data-value'));

    };

    $('#button').on('click', function() {
        wins = 0;
        loss = 0;
        randomNumber();
        update();
    });

  
    
console.log("your total: " + total)
    
randomNumber();
update();




});

