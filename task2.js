/**
 * CHALLENGE 7-2
 *
 * Fix all mistakes in the code below
 */
///code before 
// function Product(props) {
//   this.price = props.price;
//   this.priceInfo = () => {
//     console.log(`Price of the product is ${price}`);
//   };
// }

// function ElectricDevice() {
//   this.energyEfficiencyClass = props.energyEfficiencyClass;
//   energyInfo = function() {
//     console.log(
//       `Energy Efficiency Class is ${
//         this.energyEfficiencyClass
//       }`
//     );
//   };
// }

// ElectricDevice.prototype = Object.create(Product);

// function TV(props) {
//   ElectricDevice.call(props, this);
//   this.model = model;
//   this.diagonal = props.diagonal;
// }

// TV.prototype = Object.create(ElectricDevice);

// TV.prototype.constructor = TV;

// const propsForMyTv = {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42
// };

// const myTV = TV(propsForMyTv);

// /**
//  * VERIFICATION
//  */
// console.log(myTV);
// /* {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42,
//   __proto__: ...
// } */

// myTV.energyInfo(); // "Energy Efficiency Class is A+"

// myTV.priceInfo(); // Price of the product is 1200

// myTV instanceof TV; // true
// myTV instanceof ElectricDevice; // true
// myTV instanceof Product; // true
// myTV instanceof Object; // true



//code after

function Product(props) {
  this.price = props.price;
}
Product.prototype.priceInfo = function() {
  console.log(`Price of the product is ${this.price}`);
};

function ElectricDevice(props) {
  Product.call(this, props)
  this.energyEfficiencyClass = props.energyEfficiencyClass;
}

ElectricDevice.prototype.constructor = ElectricDevice;

ElectricDevice.prototype.energyInfo = function() {
   console.log(
    `Energy Efficiency Class is ${
      this.energyEfficiencyClass}`);
};



ElectricDevice.prototype = Object.create(Product.prototype);

function TV(props) {
  ElectricDevice.call(this, props);
  this.model = props.model;
  this.diagonal = props.diagonal;
}

TV.prototype =  Object.create(ElectricDevice.prototype);

TV.prototype.constructor = TV;

const propsForMyTv = {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42
};

const myTV = new TV(propsForMyTv);
/**
 * VERIFICATION
 */
console.log(myTV);
/* {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42,
  __proto__: ...
} */

// myTV.energyInfo(); // "Energy Efficiency Class is A+"

myTV.priceInfo(); // Price of the product is 1200

myTV instanceof TV; // true
myTV instanceof ElectricDevice; // true
myTV instanceof Product; // true
myTV instanceof Object; // true
