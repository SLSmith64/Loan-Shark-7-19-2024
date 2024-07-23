//Gather the HTML values from app.html by their ID.
function getValues(){

    //Variable Declarations
    let loanAmountInput = document.getElementById("loanAmount").value; 
    let termOfMonthsInput = document.getElementById("termOfMonths").value; 
    let loanInterestRateInput = document.getElementById("loanInterestRateInput").value;     

    //verify inputs so that values are a decimal/integer.
    loanAmountInput = parseFloat(loanAmountInput);
    termOfMonthsInput = parseInt(termOfMonthsInput);
    loanInterestRateInput = parseFloat(loanInterestRateInput);
    
    let amortizationData = calculateMortgage(loanAmountInput, termOfMonthsInput, loanInterestRateInput);

    displayAmortizedTable(amortizationData);

}  
function calculateMortgage(loanAmountInput, termOfMonthsInput, loanInterestRateInput) {

    const loanAmount =loanAmountInput;
    const annualInterestRate =loanInterestRateInput;

    const termYears = termOfMonthsInput/12; 
    const monthlyInterestRate = annualInterestRate / 1200;
    const totalPayments = termYears * 12;

    const amortizationTable = [];

     cumInterest =0.0;
     
    let remainingBalance = loanAmount;

    for (let month = 1; month <= totalPayments; month++) {

        const interestPayment = remainingBalance * monthlyInterestRate;

        const principalPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
        
        remainingBalance -= principalPayment;
        cumInterest += interestPayment;

        amortizationTable.push({
            month,
            payment: principalPayment,
            principal: principalPayment + interestPayment,
            interest: interestPayment,
            totalInterest: cumInterest,
            balance: remainingBalance,
        });
    }

    return amortizationTable;
}

function displayAmortizedTable(amortizationTable) {
    const tableBody = document.getElementById("amortizedTableBody");

    // Clear any existing rows
    tableBody.innerHTML = "";   

    amortizationTable.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.month}</td>
            <td>$${data.payment.toFixed(2)}</td>
            <td>$${data.principal.toFixed(2)}</td>
            <td>$${data.interest.toFixed(2)}</td>
            <td>$${data.totalInterest.toFixed(2)}</td>
            <td>$${data.balance.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
}