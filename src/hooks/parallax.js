const parallax = () => {
    
    const parallax = document.querySelectorAll(".parallax");
    
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        console.log(parallax);
        parallax.forEach(function(prllx, i) {
            console.log(prllx);
            prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
        })
    })

}

export default parallax;