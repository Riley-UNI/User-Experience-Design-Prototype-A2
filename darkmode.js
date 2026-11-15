// Code for darkmode was sourced from Coding2GO, https://www.youtube.com/watch?v=_gKEUYarehE, 2024
// Acquires the most current theme on the webpage from local storage
let darkmode = localStorage.getItem('darkmode')
// Grabs the button from HTML and defines it as const themeSwitch
const themeSwitch = document.getElementById('theme-switch')

// For defining what enabling the darkmode does
const enableDarkmode = () => {
    // Adds the class 'darkmode' to the classList
    document.body.classList.add('darkmode')
    // Stores the state of darkmode
    localStorage.setItem('darkmode', 'active')
}
// For defining how to disable the darkmode
const disableDarkmode = () => {
    // Removes darkmode from the class list
    document.body.classList.remove('darkmode')
    // Saves the state of darkmode to null, disabling it
    localStorage.setItem('darkmode', null)
}

// If darkmode equals active the enable the darkmode
if(darkmode === "active") enableDarkmode()
// When the button is clicked the following code will be executed 
themeSwitch.addEventListener("click", () => {
    // Grabs the information of the local storage of the darkmode varible
    darkmode = localStorage.getItem('darkmode')
    // Asks if dark mode does not equal active, activate it, and an else to disable the darkmode
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

