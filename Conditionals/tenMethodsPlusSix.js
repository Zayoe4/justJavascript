/*
 *  The following are a collection of exercises to practice the use of conditional statements in javascript.
 *
 *	Write a function called "checkAge". Given a person's name and age, "checkAge" returns one of two messages: "Go home, {insert_name_here}!", if they are younger than 21. "Welcome, {insert_name_here}!", if they are 21 or older. Naturally, replace "{insert_name_here}" with the given name. :)
 *
 *	var output = checkAge('Adrian', 22);
 *	console.log(output); // --> 'Welcome, Adrian!'
 */
 function checkAge(name, age) {
  // your code here
  if(age >= 21){
      return 'Welcome, ' + name + '!';;
  }else{
      return 'Go home, ' + name + '!';
  }
}

/*
 *	Write a function called "isGreaterThan10". Given a number, "isGreaterThan10" returns whether the given number is greater than 10.
 *
 *	var output = isGreaterThan10(11);
 *	console.log(output); // --> true	
 */
 function isGreaterThan10(num) {
  // your code here
  if (num > 10){
      return true;
  }else{
      return false;
  }
}

/*
 *	Write a function called "isLessThan30". Given a number, "isLessThan30" returns whether the given number is less than 30.
 *
 *	var output = isLessThan30(9);
 *	console.log(output); // --> true
 */
 function isLessThan30(num) {
  // your code here
  if (num < 30){
      return true;
  }else{
      return false;
  }
}

/*  
 *  Write a function called "equalsTen". Given a number, "equalsTen" returns whether or not the given number is 10.
 *
 *	var output = equalsTen(9);
 *	console.log(output); // --> false 
 */
 function equalsTen(num) {
  // your code here
  if (num === 10){
      return true;
  }else{
      return false;
  }
}

/*
 *  Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
 *
 *  var output = isLessThan(9, 4);
 *  console.log(output); // --> true
 */
 function isLessThan(num1, num2) {
  // your code here
    if (num1 > num2){
      return true;
  }else{
      return false;
  }
}

/*
 *    Write a function called "isGreaterThan". Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.
 *
 *    var output = isGreaterThan(11, 10);
 *    console.log(output); // --> false
 */
 function isGreaterThan(num1, num2) {
  // your code here
    if (num2 > num1){
      return true;
  }else{
      return false;
  }
}

/*
 *    Write a function called "isEqualTo". Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
 *
 *    var output = isEqualTo(11, 10);
 *    console.log(output); // --> false
 */
 function isEqualTo(num1, num2) {
  // your code here
  if(num1 === num2){
      return true;
  }else{
      return false;
  }
}

/*
 *    Write a function called "isEven". Given a number, "isEven" returns whether it is even.
 *
 *    var output = isEven(11);
 *    console.log(output); // --> false
 */
 function isEven(num) {
  // your code here
  if((num % 2) === 0){
      return true;
  }else{
      return false;
  }
}

/*
 *    Write a function called "isOdd". Given a number, "isOdd" returns whether the given number is odd.
 *
 *    var output = isOdd(9);
 *    console.log(output); // --> true 
 */
 function isOdd(num) {
   // your code here
     if ((num % 2) !== 0){   //Better to use value!==value instead of !(value===value). Why? Readability!
       return true
   }else{
       return false
   }
 }
/*
 *    Write a function called "isSameLength".
 *
 *    Given two words, "isSameLength" returns whether the given words have the same length.
 *
 *    var output = isSameLength('words', 'super');
 *    console.log(output); // --> true
 */
 function isSameLength(word1, word2) {
   // your code here
   if (word1.length === word2.length){
       return true
   }else{
       return false
   }
 }

/*
 *    Write a function called "areBothOdd".
 *
 *    Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
 *
 *    var output = areBothOdd(1, 3);
 *    console.log(output); // --> true
 */
 function areBothOdd(num1, num2) {
   // your code here
     if ((num1 % 2) !== 0 && (num2%2) !==0 ){
       return true
   }else{
       return false
   }
 }

/*
 *    Write a function called "isEitherEven".
 *
 *    Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
 *
 *    var output = isEitherEven(1, 4);
 *    console.log(output); // --> true
*/
function isEitherEven(num1, num2) {
  // your code here
  if ((num1 % 2) === 0 || (num2%2) === 0){
      return true
  }else{
      return false
  }
}

/*
 *    Write a function called "isOddLength".
 *
 *    Given a word, "isOddLength" returns whether the length of the given word is odd.
 *
 *    var output = isOddLength('special');
 *    console.log(output); // --> true
 */
 function isOddLength(word) {
   // your code here
  while( (word.length % 2) !== 0){
      return true;
  }
  return false;
 }

/*
 *    Write a function called "isEvenLength".
 *
 *    Given a word, "isEvenLength" returns whether the length of the word is even.
 *
 *    var output = isEvenLength('wow');
 *    console.log(output); // --> false 
 */
 function isEvenLength(word) {
   // your code here
   while((word.length % 2) === 0){
      return true;
  }
  return false;

 }

/*
 *    Write a function called "isEvenLength".
 *
 *    Given a word, "isEvenLength" returns whether the length of the word is even.
 *
 *    var output = isEvenLength('wow');
 *    console.log(output); // --> false
 */
 function isEvenLength(word) {
   // your code here
   while((word.length % 2) === 0){
      return true;
  }
  return false;

 }

/*
 *    Write a function called "isEvenAndGreaterThanTen".
 *
 *    Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
 *
 *    var output = isEvenAndGreaterThanTen(13);
 *    console.log(output); // --> false   
*/
function isEvenAndGreaterThanTen(num) {
  // your code here
  while( ((num % 2) === 0) && (num > 10) ){
     return true;
 }
 return false;


}