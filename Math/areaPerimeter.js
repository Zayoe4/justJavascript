/*
 *  The following are a collection of exercises to practice the using javascript to solve standard math equations.
 *
 *	Write a function called "computeAreaOfARectangle".
 *
 *	Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.
 *
 *	var output = computeAreaOfARectangle(4, 8);
 *	console.log(output); // --> 32
 */
 function computeAreaOfARectangle(length, width) {
   // your code here
   var area = length * width;
   return area;
 }	

/*
 * 	Write a function called "computePerimeterOfARectangle".
 *
 * 	Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
 *
 * 	var output = computePerimeterOfARectangle(5, 2);
 *	console.log(output); // --> 14
 */
 function computePerimeterOfARectangle(length, width) {
   // your code here
   var perimeter = (2 * length) + (2 * width);
   return perimeter;
 }

/*
 *	Write a function called "computePerimeterOfATriangle".
 *
 *	Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimeter.
 *
 *	var output = computePerimeterOfATriangle(6, 7, 10);
 *	console.log(output); // --> 23
 */

 function computePerimeterOfATriangle(side1, side2, side3) {
   // your code here
   var perimeter = side1 + side2 + side3;
   return perimeter;
 }

/*
 *	Write a function called "computeTripledAreaOfARectangle".
 *
 *	Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
 *
 *	var output = computeTripledAreaOfARectangle(2, 4);
 *	console.log(output); // --> 24
 */
 function computeTripledAreaOfARectangle(length, width) {
   // your code here
   var tripledArea = 3 * (length * width);
   return tripledArea;
 }

/*
 *	Write a function called "computePerimeterOfACircle".
 *
 *	Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
 *
 *	Notes:
 *
 *	Math.PI can be used for pi.
 *	var output = computePerimeterOfACircle(4);
 *	console.log(output); // --> 25.132741228718345
 */
 function computePerimeterOfACircle(radius) {
   // your code here
   var perimeter = 2*Math.PI*radius;
   return perimeter;
 }

/*
 *	computeAreaOfACircle
 *	Submitted on Mon, May 27
 *	JAVASCRIPT
 *	Write a function called "computeAreaOfACircle".
 *
 *	Given the radius of a circle, "computeAreaOfACircle" returns its area.
 *
 *	Notes:
 *
 *	Math.PI can be used for pi.
 *	var output = computeAreaOfACircle(4);
 *	console.log(output); // --> 50.26548245743669
 */
 function computeAreaOfACircle(radius) {
   // your code here 
   var area = Math.PI * radius * radius;
   return area;
 }