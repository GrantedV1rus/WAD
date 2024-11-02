//About Page OnClick
function mission() {
    alert("Spartans, listen up. You've faced impossible odds before, but this mission will test every limit you've got. Our intel's shaky, Covenant presence is off the charts, and we don't have room for errors. Your objective is clear: secure that forerunner artifact and neutralize any hostiles in your path. Stick together, cover each other's six, and remember—no one else can do what you do. So get in there, make every shot count, and show them why Spartans are humanity’s best hope. Lasky out.");
}

//Contact Page OnClick
function contact() {
    alert("Thank you for contacting me. I'll be sure to reply to you as soon as possible.")
}

//Loading Screen
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.classList.add("loader-hide");

    // Remove the loader from the DOM after the animation
    loader.addEventListener("animationend", () => {
        loader.style.display = "none";
    });
});

