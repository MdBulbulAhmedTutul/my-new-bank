// Login page setup javascript
document.getElementById('login-btn').addEventListener('click', function(){

    // Step 1: get the email value
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    // Step 2: get the password value
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    // Step 3: got the (bank.html) condition
    if(email === 'bulbulahmedtutul998@gmail.com' && password === 'bulbul@ahmed998'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    };
});