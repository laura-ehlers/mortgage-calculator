/* The following code calculates the monthly mortgage repayment
of a loan with the help of node.js */

/* 1. using of the readline module with the help of node.js to
 be able to communicate via the console */
// accessing the readline module
const readline = require('readline');
// create an interface for the readline module
const rl = readline.createInterface({
    // opening of the input stream
    input: process.stdin,
    // opening of the output stream
    output: process.stdout,
});

// 2. setting the questions the user is asked and calling the function
/* first question that is asked and using a callback function to grab
the user inout from the console for later use */
rl.question('What is the loan amount? ', loanAmount => {
    /* second question that is asked and using a callback function to grab
    the user inout from the console for later use */
    rl.question('What is your interest rate? ', interestRate => {
        /* first question that is asked and using a callback function to grab
        the user inout from the console for later use */
        rl.question('What is you tenor (in years)? ', tenor => {
            /* calling of the calculate function and converting each inputted value to a number
            (is by default read as string) */
            let monthlyPayment = calculate(Number(loanAmount), Number(interestRate), Number(tenor * 12))
            // output of the result to the console
            console.log('Your monthly mortgage payment will be', monthlyPayment);
            // closing of the reader to stop the input output streams of the readline interface
            rl.close();
        })
    })
})

// 3. Definition of the calculate function to get the monthly mortgage payment
// start of the calculate function with the parameters loanAmount, interestRate, tenor
function calculate(loanAmount, interestRate, tenor) {
    // calculation of the interest
    var interest = (loanAmount * (interestRate * 0.01)) / tenor;
    // calculation of the monthly payment
    var monthlyPayment = (((loanAmount / tenor) + interest));
    // monthly payment is returned
    return monthlyPayment;
}

