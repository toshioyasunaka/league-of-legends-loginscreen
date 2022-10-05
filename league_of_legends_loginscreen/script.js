const inputs = document.querySelectorAll('.active-span-effect');

const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {
    const span = target.previousElementSibling;

    if(target.value) return
    span.classList.remove('span-active');
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));