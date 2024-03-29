/*
 *  The following are a collection of exercises to practice accessing arrays in javascript.
 *
 *	Write a function called "addToFront".
 *
 *	Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
 *
 *	Notes:
 *
 *	It should be the SAME array, not a new array.
 *	In order to do this you should be familiar with the 'unshift' method.
 *	var output = addToFront([1, 2], 3);
 *	console.log(output); // -> [3, 1, 2]
 */
 function addToFront(arr, element) {
   // your code here
   arr.splice(0, 0, element);
   return arr;
 }

/*
 *	Write a function called "addToBack".
 *
 *	Given an array and an element, "addToBack" returns the given array with the given element added to the end.
 *
 *	Notes:
 *
 *	It should be the SAME array, not a new array.
 *	In order to do this you should be familiar with the 'push' method.
 *	var output = addToBack([1, 2], 3);
 *	console.log(output); // -> [1, 2, 3]
 */

 function addToBack(arr, element) {
   // your code here
   arr.push(element);
   return arr;
 }