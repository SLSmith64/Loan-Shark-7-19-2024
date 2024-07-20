function getValues(){

    let loanAmountInput = document.getElementById("loanAmount").value; 
    let termOfMonthsInput = document.getElementById("termOfMonths").value; 
    let loanInterestRateInput = document.getElementById("loanInterestRateInput").value; 

    //call calulation funtion(maths)

    //verify inputs that everything that is a decimal number.
    displayStuff();
}

function maths(){

//math() library(?) object(?) method

// Total Monthly Payment = (amount loaned) * (rate / 1200) / ( 1 - (1 + rate/1200)^(-Number of Months) )

// Before the very first month, Remaining Balance = the amount of the loan

// Interest Payment = Previous Remaining Balance * rate/1200

// Principal Payment = Total Monthly Payment - Interest Payment

// At the end of each month, Remaining Balance = Previous Remaining Balance - Principal Payment

}

function displayStuff(){
    let template = document.getElementById("amortizedTable-Template");
    let tableBody = document.getElementById("amortizedTableBody");

    //Clear the table data first.
    amortizedTableBody.innerHTML = "";

  //Loop over the items and display them.
    for(let index=0; index < moneys.length; index ++){
    let moneyEvent = moneys[index];

    //Get a document fragment from the template.
    let moneyRow = document.importNode(template.content, true);

    //Select the td based on an attribute.
    moneyRow.querySelector("[month-data]").textContent = moneyEvent.month;
    moneyRow.querySelector("[payment-data]").textContent = moneyEvent.city;
    moneyRow.querySelector("[principal-data]").textContent = moneyEvent.state;
    moneyRow.querySelector("[interest-data]").textContent = moneyEvent.attendance;
    moneyRow.querySelector("[totalInterest-data]").textContent = moneyEvent.attendance;
    moneyRow.querySelector("[balance-data]").textContent = moneyEvent.attendance;

    

    amortizedTableBody.appendChild(moneyRow);
  }
}