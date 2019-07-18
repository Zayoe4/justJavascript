/*
 *	The following is an exercises to practice advanced concepts of Javascript utilizing everything I have learned.
 *
 *	Write a function called "countWords".
 *
 *	Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
 *
 *	Notes:
 *
 *	If given an empty string, it should return an empty object.
 *	var output = countWords('ask a bunch get a bunch');
 *	console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
 */
 function countWords(str) {
   // your code here
     var wordArr = str.split(' ');
     var wordsCounter = {};
     if(str === ''){
       return wordsCounter;
     }
     wordArr.forEach(function(word1){
         var count = 0;
         wordArr.forEach(function(word2){
             if(word1 === word2){
                 count++;
             }
         });
         wordsCounter[word1] = count;
     });
     return wordsCounter;
 }
