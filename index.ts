#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumbers =Math.floor(Math.random()* 10+1);
console.log(randomNumbers);
const answer=await inquirer.prompt([{
    name:"UserGusesNumber",
    type:"number",
    message:"just guess a number in range of 1-10",
}]);
if(answer.UserGusesNumber===randomNumbers){

    console.log("youe guess right number");
}
else{
    console.log("you guess wrong number");
}
