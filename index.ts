#! /usr/bin/env node
import inquirer from "inquirer"

const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{

    name: "userguessnumber",
    type: "number",
    message: "please guess number between1-10",

}]);
if(answer.userguessnumber === randomnumber){
console.log("congratulation you guess right number");
}
else{
    console.log("you guess wrong number")
}