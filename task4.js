/**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

class ExtendedArray extends Array {

sum(){
return this.reduce((total, current) => total + current);
}

 onlyNumbers(){
 return this.filter((el) => typeof el === "number");
 }

}


let array1 = new ExtendedArray(1,2,3, "6h",4,5,5,"it",);

let array2 = new ExtendedArray(4,6,6,9,1,4,4,6,3,4);


console.log(array1.onlyNumbers());

console.log(array2.sum());
