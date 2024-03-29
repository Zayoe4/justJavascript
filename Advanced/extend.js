/*
 *  The following is an exercises to practice advanced concepts of Javascript utilizing everything I have learned.
 *
 *	Write a function called "extend".
 *
 *	Given two objects, "extend" adds properties from the 2nd object to the 1st object.
 *
 *	Notes:
 *
 *	Add any keys that are not in the 1st object.
 *	If the 1st object already has a given key, ignore it (do not overwrite the property value).
 *	Do not modify the 2nd object at all.
 *	var obj1 = {
 *	  a: 1,
 *	  b: 2
 *	};
 *	var obj2 = {
 *	  b: 4,
 *	  c: 3
 *	};
 *
 *	extend(obj1, obj2);
 *
 *	console.log(obj1); // --> {a: 1, b: 2, c: 3}
 *	console.log(obj2); // --> {b: 4, c: 3}
 */
 function extend(obj1, obj2) {
   // your code here
   for(var keyValue in obj2) {                 //loops through all the keys in object 2
       if(!(obj1.hasOwnProperty(keyValue))){   //checks to see if object 1 does NOT have the property keyValue
           obj1[keyValue] = obj2[keyValue];	   //if object 1 doesn't have a key object two has, it adds that key value pair to object 1
       }
   }
 }