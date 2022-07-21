const read = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let first_number = 0;
let operator;
let second_number = 0;
let result = 0;

read.question('enter  first number:', numb => {
    first_number = parseInt(numb);
    
    read.question('Enter an operator: ', opp => {
        switch (opp){
            case '+':
            case '-':
            case '*':
            case '/':
                operator = opp;
                break;
            default:
                console.log('Invalid input')
        }
        read.question('enter  second number:', second => {
            second_number = parseInt(second);
            
            if(operator == '+') {
                result = first_number + second_number;
                
            }
            else if(operator == '-') {
                result = first_number + second_number;
                
            }
            else if(operator == '*') {
                result = first_number + second_number;
            }
            else if(operator == '/') {
                result = first_number + second_number;
            }
            console.log(result)
            read.close()
        })
    })
});
