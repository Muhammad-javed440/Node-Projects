#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Please enter firstNumber",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Please enter secondNumber",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
  },
]);

// conditional statement
if (answer.operator === "+") {
  console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
  }else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
  }else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
  }
  else{
    console.log("Please select valid Operator");
  }
  
