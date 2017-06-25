/*global $, console*/
(function () {
    'use strict';

    function generateSuit() {
        var suit = Math.floor((Math.random() * 4) + 1);

        if (suit === 1){
            //console.log('diamonds');
            return 'diamonds';
        } else if(suit === 2){
            //console.log('hearts');
            return 'hearts';
        } else if (suit === 3){
            //console.log('spades');
            return 'spades';
        } else {
            //console.log ('clubs');
            return 'clubs';
        }
    }


    function generateCard() {
        /* Generate a cards */

        var suit = generateSuit();
        var cardNumber = ((Math.floor(Math.random()*13) + 1));

        return suit + '-' + cardNumber;
    }

    for(var i = 0; i < 10; i+= 1) {
        var cardCls = '.' + generateCard();

        /* Create the html here for the card */
        console.log(cardCls);
    }

    
    /* Turn out the background after 5 seconds */
    setTimeout(function () {
        $('.tile').css('background', '#eee');
        $('.guess').css('display', 'block');
    }, 5000);
}());

var suit = Math.floor((Math.random() * 4) + 1);

if (suit === 1){
    console.log('diamonds');
} else if(suit === 2){
    console.log('hearts');
} else if (suit === 3){
    console.log('spades');
} else {
    console.log ('clubs');
}

$("div").click(function() {
    alert('check test');
});

var cardNumber = ((Math.floor(Math.random()*13) + 1));
console.log(cardNumber);

do {
    suit += cardNumber;
    cardNumber++;
}
while (cardNumber < 10);





//
  //  document.getElementsByClassName() = selectCard;
//}

//cardNumber();



