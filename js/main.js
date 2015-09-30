(function() {

  function FizzBuzz() {
    this.data = [];
  }

  FizzBuzz.prototype.generate = function(input) {
    var userInput = input;
    var data = [];

    for(var i = userInput[0]; i <= userInput[1]; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        data.push("FizzBuzz");
      } else if (i % 3 === 0) {
        data.push("Fizz");
      } else if (i % 5 === 0) {
        data.push("Buzz");
      } else {
        data.push(i);
      }
    }
    return data;
  }

  FizzBuzz.prototype.read = function() {
    var userInput = [];
    var startValue = document.getElementById("start-value");
    var endValue = document.getElementById("end-value");

    userInput.push(Number(startValue.value), Number(endValue.value));
    return userInput;
  }

  FizzBuzz.prototype.write = function() {

  }

  FizzBuzz.prototype.addEventListener = function() {
    var userInput = document.getElementById("user-input");

    userInput.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log(this.read());
      // console.log("hi");
    }.bind(this), false);
  }

var fizzBuzz = new FizzBuzz();

fizzBuzz.addEventListener();

})();
