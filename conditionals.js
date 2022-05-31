// Example 1 with if()

const a = 10;
const b = 100;
const c = 3;

if (a === 10) {
  console.log("a is equal 10");
}

// Example 2 with if..else

if (b > 1) {
  console.log("b is bigger than 1");
} else {
  console.log("b is smaller than 1");
}

// Example 3 with if..else if..else

if (c > 1) {
  console.log("c is bigger than 1");
} else if (c == 10) {
  console.log("c is equal 10");
} else {
  console.log("c is smaller than 1");
}

// Example 4 with switch..case..default
const day = 1;
let weekDay = "";

switch (day) {
  case 1:
    {
      weekDay = "Monday";
      console.log("Monday");
    }
    break;
  case 2:
    {
      console.log("Tuesday");
    }
    break;

  case 3:
    {
      console.log("Wednesday");
    }
    break;

  case 4:
    {
      console.log("Thursday");
    }
    break;

  case 5:
    {
      console.log("Friday");
    }
    break;

  case 6:
    {
      console.log("Saturday");
    }
    break;

  case 7:
    {
      console.log("Sunday");
    }
    break;

  default: {
    console.error("You provided the wrong number");
  }
}

console.log("Week day: ", weekDay);

// Example 5 with switch..case..default

const dayNum = "10";

switch (dayNum) {
  case "10":
    {
      console.log("It is true");
    }
    break;

  case "11":
    {
      console.log("It is false");
    }
    break;

  default: {
    console.log("Try much better!");
  }
}

// Example 6 comparision operators

const MATH_PI = 3.14;
const radius = 1000;

let result;

result =
  radius !== 0
    ? MATH_PI * (radius * radius)
    : "Radius can not be equal to zero";

// console.log(result);

// Example 7

const userName = "Mark";

const discount = userName === "Tony" ? "30%" : "0%";

// console.log("Congrats! Your discount is: " + discount);

// Example 8

const res =
  radius !== 0 && MATH_PI === 3.14
    ? MATH_PI * (radius * radius)
    : "Radius can not be equal to zero and MATH_PI should be correct!";

const checkRadius = radius === 10 || radius < 100 ? "Ok" : "Not Ok";

console.log(checkRadius);

// Example 9
	
const math_PI = 3.14;
const radius3 = 10;
const name = "Robert";

// comparison
console.log(math_PI === 3.14);

console.log(name === "Steven");

// numbers comparison
console.log(radius > 10);
console.log(radius >= 10);
console.log(radius < 100);
console.log(radius !== 0);

// Example 10
const M_PI = 3.14;
const rad = 10;
const n = "Robert";

console.log(n !== "Steven");

// using 'and'
const res1 =
  M_PI === 3.14 && radius >= 10 ? M_PI * (2 * rad) : M_PI * (rad * rad);

console.log("result", res1);

// using 'not' and 'or'
const res2 =
  radius !== 0 || radius < 1000 ? M_PI * (2 * rad) : M_PI * (r * rad);

console.log("result 2", res2);

// Example 11
const mathPi = 3.14;
const radius1 = 10;
const formula = "circumference";

const result1 =
  formula === "circumference"
    ? mathPi * (2 * radius1)
    : mathPi * (radius1 * radius1);

// Example 12

const r = 100;
let resultOfTast;

if (r > 0) {
  resultOfTast = r * r * 3.14;
  console.log("Result: " + resultOfTast);
} else {
  console.log("Please check your r-value digit!");
}

// Example 13

const result3 = MATH_PI * radius * radius;
 
// shorter way to change a value;
let result2 = 10 * 10;
result2 *= MATH_PI;
 
// decrease a value
const a1 = 10;
const b1 = 20;
let c1 = 40;
 
c1 = c1 - a1;
// the same operation, shorter way
c1 -= a1;
 
c1 = c1 + b1;
// the same operation, shorter way
c1+= b1;
// strings operations
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

// Example 14

// I can add a comment like that 
const myVar = 'test';
 
/*
 * I can add a comment also like that
 * to have multilines comment
 * 
  /
const myComment = "multiline comment";
 
/* 
 * Code down below is function that should find a sum of 2 elements
  */
 
 const sum = (a, b) => a + b;

 // Example 15

 // TO print a result we can use
const a2 = 10;
const b2 = 30;
const sum2 = a2 + b2;
 
console.log(a2 + b2);
 
console.log("sum of a and b is equal to ", a2 + b2);
// also sum variable can be printed
console.log("sum of a and b is equal to ", sum);
 
// info
console.info("I can print some information");
// error
console.error("I can inform about an error");