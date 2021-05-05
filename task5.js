/**
 * CHALLENGE 7-5: TASK
 *
 * Create new class "CustomArray" that should extend built-in "Array".
 *
 * Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * It should perform following actions:
 * 1. Add new element to the existing array
 * (don't use "push" method for this)
 * 2. Modify "length" property of the array (increment it)
 * 3. Log following line to the console:
 * "New element <ELEMENT> was just added to the array"
 *
 * Create instance of the new "CustomArray" class and test new method "customPush" and compare it with "push"
 *
 * What will happen if name of the custom method in the "CustomArray" class will be also "push" instead of "customPush"?
 * Try this.
 */

class CustomArray extends Array{
    
    customPush(newElement){
        let length = this.length;
        this[length] = newElement;
        console.log(`New element ${newElement} was just added to the array`);
    }
}

let array1 = new CustomArray(1,2,3);

array1.customPush(4);
console.log(array1);
