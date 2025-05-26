const toast = document.querySelector(".toast");
const submitBtn = document.querySelector("#submit-btn");


toast.style.opacity = 1;

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showToast();
})

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



