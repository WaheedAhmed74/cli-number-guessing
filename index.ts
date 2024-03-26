import inquirer from "inquirer"

const randumNumber = Math.round(Math.random()*6+1)

let flag:boolean = false;
while (flag === false) {

    const answers = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number between 1-6"
    }
    ])
    
    if (answers.userGuessNumber === randumNumber){
        console.log("Congratulation You choose a right number, and you win ")
        flag = true
    } else {
        console.log("Sorry You choose a wrong number, Better luck next time ")
    }
}

