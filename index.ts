#! usr/bin/env/ n ode
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message: "enter your first number ", type: "number", name: "firstNumber" },
    {message: "enter your second number", type: "number", name: "secondNumber" },
    {
        message:"select one of the operators to perform operatation", type:"list", name:"operator",
        choices:["addition", "subtraction", "multiplay", "divison"],
    },

]);
//conditon statement
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator ==="subtraction") {
   console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplay") {
   console.log(answer.firstNumber * answer.secondNumber);
} else if  (answer.operator === "divison") {
   console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid operator");
}  

