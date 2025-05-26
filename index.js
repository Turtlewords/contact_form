const toast = document.querySelector(".toast");
const submitBtn = document.querySelector("#submit-btn");



submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showToast();
})





function showToast() {
    toast.style.display = "flex";
    toast.style.opacity = 1;
    
    
    let myInterval = setInterval(vanishToast, 100);
    function vanishToast() {
        if (toast.style.opacity == 0) {
            clearInterval(myInterval)
        } else {
            toast.style.opacity = toast.style.opacity - 0.1;
        } 
}      
}



console.log("Initial toast opacity: " + toast.style.opacity)