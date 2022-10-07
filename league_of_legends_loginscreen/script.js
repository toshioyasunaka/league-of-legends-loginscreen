// INPUT SPAN EFFECT
const inputs = document.querySelectorAll('.login_input');
const loginButton = document.querySelector('.login_button');
const vibilityBtn = document.querySelector('#visibility-btn');
const passwordInput = document.querySelector('#password');

const handleFocus = ({target}) => { // destructuring
    const span = target.previousElementSibling;
    span.classList.add('span-active');

    vibilityBtn.classList.remove('d-none');
}

const handleFocusOut = ({target}) => { // destructuring. Same than "e.target"
    const span = target.previousElementSibling;

    vibilityBtn.classList.add('d-none');

    if(target.value) return
    span.classList.remove('span-active');
}

const handleChange = () => {
    const [username, password] = inputs; // destructuring
    // same than:
    // const username = inputs[0];
    // const password = inputs[1];

    if(username.value && password.value.length > 7) loginButton.removeAttribute('disabled');
    else loginButton.setAttribute('disabled', '')
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange)); 

// PASSWORD VISIBILITY
function showPassword() {
    vibilityBtn.classList.contains('fa-eye-slash') ? 
    vibilityBtn.classList.replace('fa-eye-slash', 'fa-eye') :
    vibilityBtn.classList.replace('fa-eye', 'fa-eye-slash')

    if (passwordInput.type === 'password') passwordInput.type = 'text';
    else passwordInput.type = 'password';
}