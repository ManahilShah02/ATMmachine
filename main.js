import inquirer from "inquirer";
let myBalance = 10000; //DOLLAR
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number:",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "Fast Cash"],
        }
    ]);
    console.log(operationAns.operation);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            //=,-=,=+
            myBalance -= amountAns.amount;
            //10000  -= amount user give
            console.log(`your remaining balance is:  ${myBalance}`);
        }
        else
            (console.log("Insufficient Amount"));
    }
    if (operationAns.operation === "check balance") {
        console.log(`your current balance is:  ${myBalance}`);
    }
    if (operationAns.operation === "Fast Cash") {
        let CashAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Choose your desired amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= CashAns.Amount;
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
