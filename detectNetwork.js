// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// var detectNetwork = function(cardNumber) {
//   // Note: `cardNumber` will always be a string
//   // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
//   // The American Express network always starts with a 34 or 37 and is 15 digits long

//   // Once you've read this, go ahead and try to implement this function, then return to the console.
// };



// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

// var detectNetwork = function(cardNumber) {
//   var cardNumSplit = cardNumber.split('')
//   var cardStart = cardNumSplit[0].concat(cardNumSplit[1]);
//   if (cardStart === '34' || '37' && cardNumSplit.length === 15){
//     return 'American Express';
//   }else if (cardStart === '39' || '39' && cardNumSplit.length === 14){
//     return 'Diner\'s Club';
//   }else if (cardStart === '51'||cardStart ==='52'||cardStart ==='53'||cardStart ==='54'||cardStart ==='55' && cardNumSplit.length === 16){
//     return 'MasterCard';
//   }else if (cardNumSplit[0] === '4' && cardNumSplit.length === 13 || cardNumSplit.length === 16 ||cardNumSplit.length === 19) {
//     return 'Visa';
//   }
// }


var detectNetwork = function(cardNumber) {
  var cardNumSplit = cardNumber.split('')
  var first2 = cardNumSplit[0].concat(cardNumSplit[1]);
  var first4 = first2.concat(cardNumSplit[2].concat(cardNumSplit[3]));
  var first7 = first4.concat(cardNumSplit[4].concat(cardNumSplit[5].concat(cardNumSplit[6])))
  if (first2 === '34' || '37' && cardNumSplit.length === 15){
    return 'American Express';
  }else if (first2 === '39' || '39' && cardNumSplit.length === 14){
    return 'Diner\'s Club';
  }else if (first2 === '51'||first2 ==='52'||first2 ==='53'||first2 ==='54'||first2 ==='55' && cardNumSplit.length === 16){
    return 'MasterCard';
  }else if (cardNumSplit[0] === '4' && cardNumSplit.length === 13 || cardNumSplit.length === 16 ||cardNumSplit.length === 19) {
    return 'Visa';
  }else if (first4 === '6011' || first7 === '644-649' || first2 === '65' && cardNumSplit.length === 16 || cardNumSplit.length === 19){
    return 'Discover';
  }else if (first4 === '5018' || first4 === '5020' || first4 === '5038' || first4 === '6304' && cardNumSplit.length === 12 || cardNumSplit.length === 13 || cardNumSplit.length === 14 || cardNumSplit.length === 15 || cardNumSplit.length === 16 || cardNumSplit.length === 17 || cardNumSplit.length === 18 || cardNumSplit.length === 19){
    return 'Maestro'
  }
}
