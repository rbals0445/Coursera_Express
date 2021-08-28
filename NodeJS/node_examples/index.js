var rect = require("./rectangle");
//import { perimeter } from "./rectangle";

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log(`ERROR : ${err.message}`);
    } else {
      console.log(
        `The area of rectangle of dimensions l = ${l} and b = ${b} is  ${rectangle.area()}`
      );
      console.log(
        `The perimeter of rectangle of dimensions l = ${l} and b = ${b} is  ${rectangle.perimeter()}`
      );
    }
  });
  console.log("This statement is after the call to rect()");
  //console.log("tjis "+ perimeter(l,b));
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, -4);
