/*  
 *  The following are a collection of exercises to practice accessing strings and related properties in javascript.
 *
 *	Write a function called "getFullName". Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
 *
 *	var output = getFullName('Joe', 'Smith');
 *	console.log(output); // --> 'Joe Smith'
 */
 function getFullName(firstName, lastName) {
  // your code here
   return firstName + " " + lastName;
}

/*
 *	Write a function called "getLengthOfWord". Given a word, "getLengthOfWord" returns the length of the given word.
 *
 *	var output = getLengthOfWord('some');
 *	console.log(output); // --> 4
 */
 function getLengthOfWord(word) {
  // your code here
   return word.length;
}

/*
 *	Write a function called "getLengthOfTwoWords". Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
 *
 *	var output = getLengthOfTwoWords('some', 'words');
 *	console.log(output); // --> 9
 */
 function getLengthOfTwoWords(word1, word2) {
  // your code here
   sum = word1.length + word2.length;
   return sum;   
}	

/*
	Write a function called "getLengthOfThreeWords".

	Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

	var output = getLengthOfThreeWords('some', 'other', 'words');
	console.log(output); // --> 14	
 */
 function getLengthOfThreeWords(word1, word2, word3) {
   // your code here
    var sum = word1.length + word2.length + word3.length;
    return sum;
 }

/*
 *	Write a function called "getAllLetters".
 *
 *	Given a word, "getAllLetters" returns an array containing every character in the word.
 *
 *	Notes:
 *	var output = getAllLetters('Radagast');
 *	console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
 */
 function getAllLetters(str) {
   // your code here
   var tempArr = [];
   for(var i = 0; i < str.length; i++){
       tempArr.push(str[i]);
   }
   return tempArr;
 }

/*
 *	Write a function called "getAllWords".
 *
 *	Given a sentence, "getAllWords" returns an array containing every word in the sentence.
 *
 *	var output = getAllWords('Radagast the Brown');
 *	console.log(output); // --> ['Radagast', 'the', 'Brown']
 */
 function getAllWords(str) {
   // your code here
   var words = str.split(' ');
   if(str === ''){
       return [];
   }
   return words;
 }

