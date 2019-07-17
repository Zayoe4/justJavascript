/*
 *    The following are a collection of exercises to practice accessing objects in javascript.
 *
 *    Write a function called "getProperty". Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:
 *
 *    If there is no property at the given key, it should return undefined.
 *    var obj = {
 *      key: 'value'
 *    };
 *    var output = getProperty(obj, 'key');
 *    console.log(output); // --> 'value'
*/
function getProperty(obj, key) {
  // your code here
  var out = obj[key]
   if (out === null){
       return undefined;
   }else{
        return out;
   }
}

/*
 *    Write a function called "addProperty". Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.
 *
 *    var myObj = {};
 *    addProperty(myObj, 'myProperty');
 *    console.log(myObj.myProperty); // --> true
 */
 function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj[key]; 
}

/*
 *    Write a function called "removeProperty". Given an object and a key, "removeProperty" removes the given key from the given object.
 *
 *    var obj = {
 *      name: 'Sam',
 *      age: 20
 *    }
 *    removeProperty(obj, 'name');
 *    console.log(obj.name); // --> undefined
 */
function removeProperty(obj, key) {
  // your code here
  obj[key] = undefined;
  return obj[key];
}