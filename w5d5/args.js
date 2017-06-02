// function sum() {
//   let result = 0;
//
//   let args = Array.from(arguments);
//   args.forEach(el => result += el);
//   return result;
// }
//
// function rest (...args) {
//   let result = 0;
//   args.forEach(el => result += el);
//   return result;
// }
//
// Function.prototype.myBind = function (ctx) {
//   return () => {
//     let args = Array.from(arguments).slice(1);
//
//     this.apply(ctx, args);
//   };
// };
//
// Function.prototype.myBind = function (...ctx) {
//   return () => {
//     // let args = Array.from(arguments).slice(1);
//     this.call(...ctx);
//   };
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   meow(word, num) {
//     console.log(`${this.name} says meow! ${word} ${num}`);
//   }
// }
//
// const curie = new Cat("Curie");
// setTimeout(curie.meow.myBind(curie, "Hello", 99), 1000);
// curie.meow.myBind(curie);


// function foo2 (...args) {
//   console.log(args);
// }

// function curriedSum(numArgs) {
//   let nums = [];
//
//   function _curriedSum(num) {
//     nums.push(num);
//
//     if (nums.length === numArgs) {
//       return nums.reduce((a, b) => a + b ,0);
//     } else {
//       return _curriedSum;
//     }
//   }
//   return _curriedSum;
// }

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  // let that = this;
  const _curried = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      // debugger;
      return this(...numbers);
    } else {
      return _curried;
    }
  };
  return _curried;
};

// 
// Function.prototype.curry = function(numArgs) {
//   let numbers = [];
//   let that = this;
//   function _curried(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       // debugger;
//       return that.apply(null, numbers);
//     } else {
//       return _curried;
//     }
//   }
//   return _curried;
// };

function add (...args) {
  // debugger;
  return args.reduce((a, b)=> a + b, 0 );
}

let a = add.curry(3);
let b = add.curry(3);
// a(1);
// a(2);
// a(3);
