/*
 *	The following are a collection of exercises to practice accessing strings and related properties in javascript.
 *
 *	Write a function called "computeAverageLengthOfWords".
 *
 *	Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
 *
 *	var output = computeAverageLengthOfWords('code', 'programs');
 *	console.log(output); // --> 6
 */
 function computeAverageLengthOfWords(word1, word2) {
  // your code here
   return (word1.length + word2.length) / 2;
}
