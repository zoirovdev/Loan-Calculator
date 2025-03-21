function calculateLoan(){
    let loanAmountValue = document.getElementById("loan-amount").value
    let interestRateValue = document.getElementById("interest-rate").value
    let monthsToPayValue = document.getElementById("months-to-pay").value

    interest = (loanAmountValue * (interestRateValue * 0.01))/monthsToPayValue

    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerText = `Monthly Payment: ${monthlyPayment}`

}
