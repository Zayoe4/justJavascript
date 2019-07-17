/*
 *  The following are a collection of exercises to practice accessing arrays in javascript.
 *
 *	Write a function called "getNthElement".
 *
 *	Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
 *
 *	Notes:
 *
 *	If the array has a length of 0, it should return 'undefined'.
 *	var output = getNthElement([1, 3, 5], 1);
 *	console.log(output); // --> 3
 */
 function getNthElement(array, n) {
   // your code here
     return array[n];
 }

/*
 *	Write a function called "getFirstElement".
 *
 *	Given an array, "getFirstElement" returns the first element of the given array.
 *
 *	Notes:
 *
 *	If the given array has a length of 0, it should return undefined.
 *	var output = getFirstElement([1, 2, 3, 4, 5]);
 *	console.log(output); // --> 1
 */
 function getFirstElement(array) {
   // your code here
     if(array.length === 0){
         return undefined;
     }else{
         return array[0];
     }
 }

/* 
 *	Write a function called "getLastElement".
 *
 *	Given an array, "getLastElement" returns the last element of the given array.
 *
 *	Notes:
 *
 *	If the given array has a length of 0, it should return 'undefined'.
 *	var output = getLastElement([1, 2, 3, 4]);
 *	console.log(output); // --> 4
 */
 function getLastElement(array) {
   // your code here
   return array[array.length-1]
 }
