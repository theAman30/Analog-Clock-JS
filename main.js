const body = document.querySelector("body");
hourHand = document.querySelector(".hour_hand");
minuteHand = document.querySelector(".minute_hand");
secondHand = document.querySelector(".second_hand");
modeSwitch = document.querySelector(".mode-switch");


if (localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

// adding a click event listener on mode-switch 
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    // checking if the dark mode is currently applied 
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    
    // setting local storage accordingly
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    });

const updateTime = () => {
    // get current time and calculate in degrees for clock hand 
    let date = new Date(),
    secToDeg = (date.getSeconds()/60) * 360,
    minToDeg = (date.getMinutes()/60) * 360,
    hourToDeg = (date.getHours()/12) * 360;

    // rotate the clock hands to the appropriate degree based on their current time 
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

setInterval(updateTime, 1000);

// calling update time function when page loads 
updateTime();