const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Clock {
  constructor() {
    const time = new Date();
    // debugger
     this.hours = time.getHours();
     this.minutes = time.getMinutes();
     this.seconds = time.getSeconds();
    let timer = () => {
      this._tick();
    };

    setInterval(timer, 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.*
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    const formatted = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(formatted);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes +=1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours +=1;
    }
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

// const clock = new Clock();







function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please give a number", function(answer) {
      var num = parseInt(answer);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  if (numsLeft === 0) {
    completionCallback();
    reader.close();
  }
}


// addNumbers(0, 3, () => console.log("We're done"));

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} bigger than ${el2}`, function(answer) {
    if (answer === "yes") {
      callback(true);
    }
    else {
      callback(false);
    }
    // reader.close();
  });
}

// askIfGreaterThan(0, 3, () => console.log("We're done"));
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan === true ) {
        let left_dup = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = left_dup;
        console.log(arr);
        madeAnySwaps = true;
      }
      else if (isGreaterThan === false) {
        console.log(arr);
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if (i == arr.length - 1)  {
    outerBubbleSortLoop(madeAnySwaps);
  }
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true ) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  // let madeAnySwaps = true;
  outerBubbleSortLoop(true);

}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// console.log(innerBubbleSortLoop([3,1,2], 0));







class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to


Function.prototype.myBind = function(obj){
  return () => this.call(obj);
};

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"





// times(3, nemo.swim.bind(nemo, 'window', 'walls'));
// times(3, nemo.swim.bind(champ, 'window', 'doghouse'));
// BIND does not run the function - it returns a NEW
// function that is a copy with the context set by the argument you passed
// to bind

















// test
