/*
 *  The following are a collection of exercises to practice accessing and writing to objects in javascript.
 *
 *	Write a function called "addFullNameProperty".
 *
 *	Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" sets a "fullName" property on the input object, whose value is a string with the first name and last name separated by a space.
 *
 *	var person = {
 *	  firstName: 'Jade',
 *	  lastName: 'Smith'
 *	};
 *	addFullNameProperty(person);
 *	console.log(person.fullName); // --> 'Jade Smith'
 */
 function addFullNameProperty(obj) {
   // your code here
    obj.fullName = obj.firstName + ' ' + obj.lastName;  
 }

/*
 *	Write a function called "addObjectProperty".
 *
 *	Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
 *
 *	var person1 = {
 *	  name: 'Joe Blow',
 * 	  role: 'schlub'
 * 		};
 *	var person2 = {
 *	  name: 'Mr. Burns',
 *	  role: 'supervisor'
 *	};
 *	addObjectProperty(person1, 'manager', person2);
 *	console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
 */
 function addObjectProperty(obj1, key, obj2) {
   // your code here
    obj1[key] = obj2;

    
 }

/*
 *	Write a function called "isPersonOldEnoughToDrinkAndDrive".
 *
 *	Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
 *
 *	Notes:
 *
 *	The legal drinking age in the United States is 21.
 *	The legal driving age in the United States is 16.
 *	It is ALWAYS illegal to drink and drive in the United States.
 *	var obj = {
 *	  age: 45
 *	};
 *	var output = isPersonOldEnoughToDrinkAndDrive(obj);
 *	console.log(output); // --> false
 */
 function isPersonOldEnoughToDrinkAndDrive(person) {
  // your code here
    return false;  //warning #2: NEVER DRINK AND DRIVE >:l
}

/*
 *	Write a function called "isPersonOldEnoughToDrive".
 *
 *	Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
 *
 *	Notes:
 *
 *	The legal driving age in the United States is 16.
 *	var obj = {
 *	  age: 16
 *	};
 *	var output = isPersonOldEnoughToDrive(obj);
 *	console.log(output); // --> true 
 */
 function isPersonOldEnoughToDrive(person) {
   // your code here
    if (person.age > 15){
        return true;
    }else{
        return false;
    }
 }

/*
 *	Write a function called "isPersonOldEnoughToVote".
 *
 *	Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
 *
 *	Notes:
 *
 *	The legal voting age in the United States is 18.
 *	var obj = {
 *	  age: 19
 *	};
 *	var output = isPersonOldEnoughToVote(obj);
 *	console.log(output); // --> true 
 */
 function isPersonOldEnoughToVote(person) {
   // your code here
     if (person.age < 18){
        return false;
    }else{
        return true;
    }
 }

/*
 *	Write a function called "addArrayProperty".
 *
 *	Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
 *
 *	var myObj = {};
 *	var myArray = [1, 3];
 *	addArrayProperty(myObj, 'myProperty', myArray);
 *	console.log(myObj.myProperty); // --> [1, 3] 
 */
 function addArrayProperty(obj, key, arr) {
   // your code here
    obj[key] = arr;
 }