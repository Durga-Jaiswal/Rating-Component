const mainContainer = document.querySelector(".main-container");
const thankContainer = document.querySelector(".thank-you-card");
const submitButton = document.getElementById("submit");
const ratingTaken = document.getElementById("rating-taken");
const ratingNo = document.querySelectorAll(".rating_no");
submitButton.addEventListener("click", ()=>{
    thankContainer.classList.remove("hidden");
    mainContainer.style.display="none"
})
ratingNo.forEach((e) => {
    e.addEventListener("click", () => {
         ratingTaken.innerHTML = e.innerHTML;
           
    })
})