// Conditional Practice - :admission_tickets: Movie Ticket Pricing
// Imagine you're building a movie ticket pricing system. It should determine the price of a ticket based on a customer's age and the day of the week.

//     Create two variables - one for age, another for day of the week.
//     Calculate the price of a ticket using the following rules:

//     Children under 2: free
//     Children under 13: $5
//     Adults 65 or older: $6
//     All others: $8

//     If it's Tuesday, apply a 50% discount to the ticket price.
//     Print out a message to the user with their ticket price.
//     Test your program with different ages and days of the week to ensure it calculates the correct ticket prices.

let age = 43;
let day = "Tuesday";

// if (age < 2) {
//   console.log("Your ticket is free.");
// } else if (age <= 13 && age >= 2) {
//   if (day === "Tuesday") {
//     console.log(`Your total will be $2.50.`);
//   } else {
//     console.log(`Your total will be $5.`);
//   }
// } else if (age >= 65) {
//   if (day === "Tuesday") {
//     console.log(`Your total will be $3.`);
//   } else {
//     console.log(`Your total will be $6.`);
//   }
// } else {
//   if (day === "Tuesday") {
//     console.log(`Your total will be $4.`);
//   } else {
//     console.log(`Your total ill be $8.`);
//   }
// }

// const ticketResult = () => {} other way to write it, cannot be hoisted
function ticketResult(customerAge, weekDay) {
  let ticketPrice;
  if (customerAge < 2) {
    ticketPrice = 0;
  } else if (customerAge < 13) {
    ticketPrice = 5;
  } else if (customerAge >= 65) {
    ticketPrice = 6;
  } else {
    ticketPrice = 8;
  }

  if (weekDay === "Tuesday") {
    ticketPrice *= 0.5;
  }
  return ticketPrice;
}
console.log("Your total is $" + ticketResult(0, "Tuesday"));

// arrow notation

const calcSum = (numA, numB) => {
  console.log(numA + numB);
};

calcSum(8, 3);

// conditionals

const canVote = (age, firstName) => {
  if (age >= 18) {
    console.log(`Congrats ${firstName}, you are old enough to vote.`);
  } else {
    console.log(`Sorry ${firstName}, you are not old enough to vote.`);
  }
};

canVote(17, "John");

const areaRectangle = (l, w) => {
  const area = l * w;
  return area;
};

console.log(`The area of my rectangle is ${areaRectangle(10, 20)}.`);
