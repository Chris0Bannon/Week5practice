console.log("yo");

let card0 ={
suit:'Hearts',
number: 2
} //end card0

let card1 = {
  suit: 'Spades',
  number: 13
} //end card1


function isRed (cardToCheck) {
  console.log('in isRed', cardToCheck);
if (cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds') {
  return true;
}//end red
else {
  return false;
} //end !red
}//end isRed

console.log(isRed(card0));
console.log(isRed(card1));

function cardIsHigher( cardToCheck1, cardToCheck2) {
  console.log('in cardIsHigher',cardToCheck1, cardToCheck2 );
  if (cardToCheck1.number > cardToCheck2.number) {
    console.log('cardToCheck1 has a higher number');
  } // end cardIsHigher
  else {
    console.log('cardToCheck2 has a higher number');
  }
}

cardIsHigher(card0, card1);
