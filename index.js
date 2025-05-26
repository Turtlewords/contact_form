const toast = document.querySelector(".toast");
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit-btn");
const firstName = document.querySelector("#first-name");
const firstInvalid = document.querySelector("#first-invalid");
const lastName = document.querySelector("#last-name");
const lastInvalid = document.querySelector("#last-invalid");
const email = document.querySelector("#email");
const emailInvalid = document.querySelector("#email-invalid");
const radios = document.querySelectorAll("input[type='radio']");
const radiosInvalid = document.querySelector("#radios-invalid")
const consent = document.querySelector("#consent");
const consentInvalid = document.querySelector("#consent-invalid");
const message = document.querySelector("#message");
const messageInvalid = document.querySelector("#message-invalid");

toast.style.opacity = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm()
})

form.addEventListener("reset", resetErrors)


function validateForm() {
    let isValid = true;
    let radioCount = 0;

    if (firstName.value === "") {
        firstName.style.borderColor = '#D73C3C'
        firstInvalid.style.display = "inline-block";
        isValid = false;
    } else {
        firstName.style.borderColor = 'black'
        firstInvalid.style.display = "none";
    }

    if (lastName.value === "") {
        lastName.style.borderColor = '#D73C3C'
        lastInvalid.style.display = "inline-block";
        isValid = false;
    } else {
        lastName.style.borderColor = 'black'
        lastInvalid.style.display = "none";
    }

    if (email.value === "") {
        email.style.borderColor = '#D73C3C'
        emailInvalid.style.display = "inline-block";
        isValid = false;
    } else {
        email.style.borderColor = 'black'
        emailInvalid.style.display = "none";
    }

    radios.forEach((radio) => {
        if (radio.checked) {
            radioCount++;
        }
    })

    if (radioCount == 0) {
        radiosInvalid.style.display = "inline-block";
        isValid = false;
    } else {
        radiosInvalid.style.display = "none";
    }

    if (message.value === "") {
        message.style.borderColor = '#D73C3C'
        messageInvalid.style.display = "inline-block";
        isValid = false;
    } else {
        message.style.borderColor = 'black'
        messageInvalid.style.display = "none";
    }

    if (!consent.checked) {
        consent.style.borderColor = '#D73C3C'
        consentInvalid.style.display = "inline-block";
        isValid = false;
    } else {
        consent.style.borderColor = 'black'
        consentInvalid.style.display = "none";
    }

    if (isValid) {
        showToast();
        resetForm()
        return true;
    } 
    else {
        return false;
    }
}

function resetErrors() {
    firstInvalid.style.display = "none";
    lastInvalid.style.display = "none";
    emailInvalid.style.display = "none";
    radiosInvalid.style.display = "none";
    messageInvalid.style.display = "none";
    consentInvalid.style.display = "none";
}

function resetForm() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    radios.forEach((radio) => {
        radio.checked = false;
    })
    message.value = "";
    consent.checked = false;
}


// submitBtn.addEventListener("click", (e) => {
    

//     showToast();
//     e.preventDefault();
// })

function showToast() {
    toast.style.display = "flex";
    
    setTimeout(() => {
        let myInterval = setInterval(vanishToast, 100);
    function vanishToast() {
        if (toast.style.opacity == 0) {
            clearInterval(myInterval)
        } else {
            toast.style.opacity = toast.style.opacity - 0.1;
        } 
    }      
    }, 2000);
}



