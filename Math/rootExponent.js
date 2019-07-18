/*
 *	Write a function called "computePower".
 *
 *	Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.
 *
 *	var output = computePower(2, 3);
 *	console.log(output); // --> 8 
 */
 function computePower(num, exponent) {
   // your code here
   var output = Math.pow(num, exponent);
   return output;
 }

/*
 *	Write a function called "computeSquareRoot". Given a number, "computeSquareRoot" returns its square root.
 *
 *	var output = computeSquareRoot(9);
 *	console.log(output); // --> 3
 */
 function computeSquareRoot(num) {
   // your code here
   var sqrt = Math.sqrt(num);
   return sqrt;
 }

/*
 *	Write a function called "doubleSquareRootOf". Given a number, "doubleSquareRootOf" returns double its square root.
 *
 *	var output = doubleSquareRootOf(121);
 *	console.log(output); // --> 22
 */
 function doubleSquareRootOf(num) {
   // your code here
   var sqrt = Math.sqrt(num);
   return sqrt * 2;
 }