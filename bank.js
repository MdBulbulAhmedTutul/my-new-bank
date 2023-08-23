// Deposit btn Js setting
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

    // Step 5: Set The Account Balance before the deposit
    const newCurrentBalace = currentBalanceNumber + depositAmmountNumber;
    currentBalance.innerText = newCurrentBalace;
});


// Withdraw Btn js setting
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // Step 1: get withdraw Value
    const withdrawAmount = document.getElementById('withdrw-amount');
    const withdrawAmountString = withdrawAmount.value;
    const withdrawAmountNumber = parseFloat(withdrawAmountString);
    withdrawAmount.value = '';

    // Step 4: get the current balance
    const currentBalance = document.getElementById('curent-balance');
    const currentBalanceString = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceString);

    // Step 6: condition current balance and withdraw Balance
    if(withdrawAmountNumber > currentBalanceNumber){
        alert('Check Your Current balance');
        return
    }
    
    // Step 2: get the current witdraw Money
    const witdrawMoney = document.getElementById('witdraw-money');
    const witdrawMoneyString = witdrawMoney.innerText;
    const witdrawMoneyNumber = parseFloat(witdrawMoneyString);
    
    // Step 3: set the withdraw money
    const newWithdrawMoney = witdrawMoneyNumber + withdrawAmountNumber;
    witdrawMoney.innerText = newWithdrawMoney;

 

    // Step 5: Set The Account Balance brfore withdraw
    const updateCurentBalance = currentBalanceNumber - withdrawAmountNumber;
    currentBalance.innerText = updateCurentBalance;

    
});