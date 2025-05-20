

let form = document.getElementById("form");
let fullName = document.getElementById("name");
let nameAlert = document.getElementById("namealert");
let email = document.getElementById("email");
let emailAlert = document.getElementById("emailalert");
let password = document.getElementById("password");
let passAlert = document.getElementById("passalert");
let confirmPassword = document.getElementById("con-password");
let confirmPassAlert = document.getElementById("passconfirmalert");
let displayForm = form.innerHTML;

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^.{8,}$/;
let nameRegex = /^[A-Za-z\s]+$/;

email.addEventListener('input', () => {
    if (!emailRegex.test(email.value)) {
        emailAlert.innerText = "Enter a valid email address";
        emailAlert.style.color = "red";
    } else {
        emailAlert.innerText = "";
    }
});

password.addEventListener('input', () => {
    if (!passwordRegex.test(password.value)) {
        passAlert.innerHTML = "Password should be at least 8 characters";
        passAlert.style.color = "red";
    } else {
        passAlert.innerHTML = "";
    }
});

confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        confirmPassAlert.innerText = "Passwords do not match";
        confirmPassAlert.style.color = "red";
    } else {
        confirmPassAlert.innerText = "";
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formValid = true;

    if (fullName.value.trim() === "") {
        nameAlert.innerText = "Fill this area";
        nameAlert.style.color = "red";
        formValid = false;
    } else {
        nameAlert.innerText = "";
    }

    if (!emailRegex.test(email.value)) {
        emailAlert.innerText = "Enter a valid email address";
        emailAlert.style.color = "red";
       formValid = false;
    } else {
        emailAlert.innerText = "";
    }

    if (!passwordRegex.test(password.value)) {
        passAlert.innerHTML = "Password should be at least 8 characters";
        passAlert.style.color = "red";
        formValid = false;
    } else {
        passAlert.innerHTML = "";
    }

    if (password.value !== confirmPassword.value) {
        confirmPassAlert.innerText = "Passwords do not match";
        confirmPassAlert.style.color = "red";
       formValid = false;
    } else {
        confirmPassAlert.innerText = "";
    }

    if (formValid) {
        const display =document.getElementById("heading")
        display.innerText=""
        form.innerHTML = `
            <p class="text-center text-success">Form Submitted successfully!</p>
            <button id="btn" class="btn btn-success">Done</button>
        `;
        const confirmBtn = document.getElementById("btn");

        confirmBtn.addEventListener("click", () => {
            display.innerText="Form Validation"
            form.innerHTML = displayForm;
        });
    }
});

 