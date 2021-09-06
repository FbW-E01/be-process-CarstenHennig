import process, { argv } from "process";

const length = process.argv.length;
let sum = 0;

// if (process.argv[2] == "sum") {
//   for (let i = 3; i < length; i++) {
//     sum = parseInt(process.argv[i]) + sum;
//   }
// } else if (process.argv[2] == "avg") {
//   for (let i = 3; i < length; i++) {
//     sum = parseInt(process.argv[i]) + sum;
//   }
//   console.log(sum / (process.argv.length - 3));
// } else {
//   console.log(
//     'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
//   );
// }

for (let i = 3; i < length; i++) {
  if (isNaN(parseInt(process.argv[i]))) {
    console.log(
      `Sorry, the argument "${process.argv[i]}" is not a number, please try again`
    );
    break;
  } else if (i == length - 1) {
    if (process.argv[2] == "sum") {
      for (let j = 3; j < length; j++) {
        sum = parseInt(process.argv[j]) + sum;
      }
      console.log(sum);
    } else if (process.argv[2] == "avg") {
      for (let j = 3; j < length; j++) {
        sum = parseInt(process.argv[j]) + sum;
      }
      console.log(sum / (process.argv.length - 3));
    } else {
      console.log(
        'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
      );
    }
  }
}
