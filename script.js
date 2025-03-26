const slider = document.getElementById("mySlider");
// console.log(slider);

slider.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value > 70)
        displayAppScreen()
})

displayAppScreen = () => {
    // hide slide screen
    document.querySelector(".homeScreen").remove();
    // show 
    document.querySelector(".appScreen").style.display = "block";

};


const contactIcon = document.querySelector(".icon");
// console.log(contactIcon);

contactIcon.addEventListener("click", (e) => {
    displayContactScreen();

});

displayContactScreen = () => {
    document.querySelector(".appScreen").style.display = "none";

    document.querySelector(".contactListScreen").style.display = "block";

}