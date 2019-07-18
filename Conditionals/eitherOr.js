/*
 *  The following are a collection of exercises to practice using conditional statements in javascript.
 *
 *	Write a function called "or".
 *
 *	Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:
 *
 *	Do not use the || operator.
 *	Use ! and && operators instead.
 *	var output = or(true, false);
 *	console.log(output); // --> true;
 */
 function or(expression1, expression2) {
   // your code here
   if(expression1){
       if(expression2){
           return true;
       }
       return true
   }else if(!expression1){
       if(expression2){
           return true
       }
       return false
   }else{
       return false;
   }
 }

/*
 *	Write a function called "isEitherEvenOrAreBoth7".
 *
 *	Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.
 *
 *	var output = isEitherEvenOrAreBoth7(3, 7);
 *	console.log(output); // --> false
 *
 *	var output = isEitherEvenOrAreBoth7(2, 3);
 *	console.log(output); // --> true 
 */
 function isEitherEvenOrAreBoth7(num1, num2) {
     // your code here
  	 if(((num1%2) === 0 || (num2%2) === 0) || (num1 == 7 && num2 == 7)){
  	     return true;
  	 }else{
  	     return false;
  	 }
 }

/*
 *	Write a function called "isEitherEvenAndLessThan9".
 *
 *	Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.
 *
 *	var output = isEitherEvenAndLessThan9(2, 4);
 *	console.log(output); // --> true
 *
 *	var output = isEitherEvenAndLessThan9(72, 2);
 *	console.log(output); // --> false
 */
 function isEitherEvenAndLessThan9(num1, num2) {
   // your code here
	 if(((num1%2) === 0 || (num2%2) === 0) && ((num1 < 9) && (num2 < 9))){
	     return true;
	 }else{
	     return false;
	 }
 }



