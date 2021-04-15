var emailId = '';
var password = '';


function login() {
    emailId = document.getElementById('email').value;
    password = document.getElementById('pswd').value;

    if( emailId == 'svgie@gmail.com' && password == '12345') {
        window.location.href="https://ilyashussain07.github.io/QZtravels/";
    }
    else {
        alert(document.getElementById('message').innerHTML='Invalid Email and password');
        document.getElementById('message').style.color='red';
        
    }

    return false;
}