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
   return array[array.length-1];
 }

/*
 *  Write a function called "getElementsAfter".
 *
 *  Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
 *
 *  Notes:
 *
 *  In order to do this you should be familiar with the 'slice' method.
 *  var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
 *  console.log(output); // --> ['d', 'e']
 */
 function getElementsAfter(array, n) {
   // your code here
   var myArr = [];
   if(array.length === 1){
       return [];
   }
   for(var i  = n+1; i < array.length; i++){
       myArr = myArr.concat(array[i]);
   }
   return myArr;
 }

/*
 *    Write a function called "getElementsUpTo".
 *
 *    Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.
 *
 *    Notes:
 *
 *    In order to do this you should be familiar with the 'slice' method.
 *    var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
 *    console.log(output); // --> ['a', 'b', 'c']
 */
 function getElementsUpTo(array, n) {
   // your code here
   var tempArr = array.slice(0,n);
   return tempArr;
 }

/*
 *  Write a function called "getAllElementsButFirst".
 *
 *  Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
 *
 *  var input = [1, 2, 3, 4];
 *  var output = getAllElementsButFirst(input);
 *  console.log(output); // --> [2, 3, 4]
 */
 function getAllElementsButFirst(array) {
   // your code here
   array.splice(0, 1);
   return array;
 }

/*
 *  Write a function called "getAllElementsButLast".
 *
 *  Given an array, "getAllElementsButLast" returns an array with all the elements but the last.
 *
 *  var input = [1, 2, 3, 4];
 *  var output = getAllElementsButLast(input);
 *  console.log(output); // --> [1, 2 , 3]
 */
 function getAllElementsButLast(array) {
   // your code here
   array.splice(-1, 1);
   return array;
 }

/*

 */