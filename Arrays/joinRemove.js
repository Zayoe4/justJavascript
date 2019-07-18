
/*
 *   The following are a collection of exercises to practice writing to/over arrays in javascript.
 *    
 *   Write a function called "joinArrays".
 *
 *   Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2".
 *
 *   var output = joinArrays([1, 2], [3, 4]);
 *   console.log(output); // --> [1, 2, 3, 4]
 *   You should be familiar with the "concat" method for this problem.
 */
 function joinArrays(arr1, arr2) {
   // your code here
   var newArr = arr1.concat(arr2);
   return newArr;
 }

 /*
  *	Write a function called "removeFromBack".
  *
  *	Given an array, "removeFromBack" returns the given array with its last element removed.
  *
  *	Notes:
  *	You should be familiar with the method 'pop'.
  *	var output = removeFromBack([1, 2, 3]);
  *	console.log(output); // --> [1, 2]
  */
  function removeFromBack(arr) {
    // your code here
    arr.pop();
    return arr;
  }
 
/*
 *	Write a function called "removeFromFront".
 *
 *	Given an array, "removeFromFront" returns the given array with its first element removed.
 *
 *	Notes:
 *
 *	You should be familiar with the method 'shift'.
 *	var output = removeFromFront([1, 2, 3]);
 *	console.log(output); // --> [2, 3]
 */
 function removeFromFront(arr) {
   // your code here
   arr.shift();
   return arr;
 }

/*
 *	Write a function called "removeFromBackOfNew".
 *
 *	Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.
 *
 *	Notes:
 *
 *	You should be familiar with the 'slice' method.
 *	var arr = [1, 2, 3];
 *	var output = removeFromBackOfNew(arr);
 *	console.log(output); // --> [1, 2]
 *	console.log(arr); // --> [1, 2, 3] 
 */
 function removeFromBackOfNew(arr) {
   // your code here
   var tempArr = arr.slice();
   tempArr.pop();
   return tempArr;
 }

/*
Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

Notes:

You should be familiar with the 'slice' method.
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3] 
 */
 function removeFromFrontOfNew(arr) {
   // your code here
   var tempArr = arr.slice();
   tempArr.shift();
   return tempArr;
 }

/*
 *	Write a function called "countCharacter".
 *
 *	Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.
 *
 *	var output = countCharacter('I am a hacker', 'a');
 *	console.log(output); // --> 3
 */
 function countCharacter(str, char) {
   // your code here
   var count = 0;
   for(var i = 0; i < str.length; i++){
       if(char === str[i]){
           count++;
       }
   }
   return count;
 }