/*	
 *  The following are a collection of exercises to practice the use of conditional statements in javascript.
 *
 *  Write a function called "isOldEnoughToDrive". Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States. Notes:
 *
 *  The legal driving age in the United States is 16.
 *  var output = isOldEnoughToDrive(22);
 *  console.log(output); // --> true
 */

 function isOldEnoughToDrive(age) {
  // your code here
  if(age > 15){
      return true;
  }else{
      return false;
  }
}

/*	
 *	Write a function called "isOldEnoughToDrink". Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States. Notes:
 *
 *	The legal drinking age in the United States is 21.
 *	var output = isOldEnoughToDrink(22);
 *	console.log(output); // --> true
 */
 
function isOldEnoughToDrink(age) {
  // your code here
  if(age > 20){
     return true;
  }else{
      return false;
  }
}
/*
 *	Write a function called "isOldEnoughToVote". Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States. Notes:
 *
 *	The legal voting age in the United States is 18.
 *	var output = isOldEnoughToVote(22);
 *	console.log(output); // --> true
 */
 function isOldEnoughToVote(age) {
  // your code here
  if(age > 17){
      return true;
  }else{
      return false;
  }
}
/*
 *	Write a function called "isOldEnoughToDrinkAndDrive". Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States. Notes:
 *
 *	The legal drinking age in the United States is 21.
 *	It is always illegal to drink and drive in the United States.
 *	var output = isOldEnoughToDrinkAndDrive(22);
 *	console.log(output); // --> false
 */
 function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  return false;  //Never drink and drive >:\
}