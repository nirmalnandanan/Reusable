const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();


    if(usernameValue === ''){
        setError(username, 'username cannot be empty');
    }
    else {
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setError(email,'email is not valid');
    }
    else {
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'please fill in the password');
    }
    else {
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'please confirm your password');
    }
    else if(passwordValue !== password2Value){
        setError(password2, 'passwords doesnot match');
    }
    else {
        setSuccess(password2);
    }
    


}

function setError (input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.classList.remove('success');
    formControl.classList.add('error');
}
function setSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = '';
    formControl.classList.remove('error');
    formControl.classList.add('success');
}
function isEmail(email){
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/.test(email);
}