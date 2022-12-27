console.log('Running');
// Condiitons
// Username cannot be less than  or equal to 2 letters
// Email must include @ + '.'
// Password must be 8 characters long


function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let usernameIsShort;
    let usernameIsBlank;
    let emailDoesntIncludeATOrPeriod;
    let passwordIsnt8Characters;

    console.log('Clicked Submit Form');
    console.log(username + email + password);

    if (username.length <= 2 && username != '') {
        usernameIsShort = true; 
        console.log('Username Is Short');
    } else {
        usernameIsShort = false;
    }
    if (username == '') {
        usernameIsBlank = true;
        console.log('Username Is Blank');
    } else {
        usernameIsBlank = false;
    }
    if (!email.includes('@') || !email.includes('.')) {
        emailDoesntIncludeATOrPeriod = true;
        console.log('Email is not vaild');
    } else {
        emailDoesntIncludeATOrPeriod = false;
    }
    if (password.length < 8) {
        passwordIsnt8Characters = true;
        console.log('Password must be 8 characters!');
    } else {
        passwordIsnt8Characters = false;
    }

    console.log(usernameIsShort + '' + usernameIsBlank + emailDoesntIncludeATOrPeriod + passwordIsnt8Characters);
    const usernameLabel = document.getElementById('usernameLabel');
    const emailLabel = document.getElementById('emaillabel');
    const passwordLabel = document.getElementById('passwordlabel');

    const usernameRed = document.getElementById('username');
    const emailRed = document.getElementById('email');
    const passwordRed = document.getElementById('password');

    // Username
    if (usernameIsShort == true) {
        usernameLabel.innerHTML = 'Username is too short';
        usernameLabel.style.visibility = 'visible';
        usernameRed.style.borderColor = 'red';
    } else if (usernameIsBlank == true) {
        usernameLabel.innerHTML = 'Username cannot be blank';
        usernameLabel.style.visibility = 'visible';
        usernameRed.style.borderColor = 'red';
    } else {
        usernameLabel.innerHTML = 'Null';
        usernameLabel.style.visibility = 'hidden';
        usernameRed.style.borderColor = 'green';
    }
    // Email
    if (emailDoesntIncludeATOrPeriod == true) {
        emailLabel.innerHTML = 'Please enter a vaild email';
        emailLabel.style.visibility = 'visible';
        emailRed.style.borderColor = 'red';
    } else {
        emailLabel.innerHTML = 'Null';  
        emailLabel.style.visibility = 'hidden';
        emailRed.style.borderColor = 'green';
    }
    // Password
    if (passwordIsnt8Characters == true) {
        passwordLabel.innerHTML = 'Password must be 8 characters';
        passwordLabel.style.visibility = 'visible';
        passwordRed.style.borderColor = 'red';
    } else {
        passwordLabel.innerHTML = 'Null';
        passwordLabel.style.visibility = 'hidden';
        passwordRed.style.borderColor = 'green';
    }
    
}