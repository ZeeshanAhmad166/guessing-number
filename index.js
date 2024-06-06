import inquirer from "inquirer";
// 1)computer will generate a random number
// 2) user input for guessing number
// 3)compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please enter a valid number between between 1-6",
    },
]);
console.log(answers);
if (answers.userguessednumber === randomnumber) {
    console.log(" you guessed right number and Congratulations !you win");
}
else {
    console.log("ohh you entered wrong number");
}
