// Deposit and withdraw Js setting
document.getElementById('deposit-btn').addEventListener('click', function(){

    // Step 1: get the deposit value
    const depositAmmount = document.getElementById('deposit-ammount');
    const depositAmmountString = depositAmmount.value;
    const depositAmmountNumber = parseFloat(depositAmmountString);
    depositAmmount.value = '';

    // Step 2: get the curent deposit money
    const depositMoney = document.getElementById('deposit-money');
    const depositMoneyString = depositMoney.innerText;
    const depositMoneyNumber = parseFloat(depositMoneyString);

    // Step 3: Set The deposit money
    const newDepositMoney = depositMoneyNumber+ depositAmmountNumber;
    depositMoney.innerText = newDepositMoney;

    // Step 4: get the current balance
    const currentBalance = document.getElementById('curent-balance');
    const currentBalanceString = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceString);

    // Step 5: Set The Account Balance
    const newCurrentBalace = currentBalanceNumber + depositAmmountNumber;
    currentBalance.innerText = newCurrentBalace;
});