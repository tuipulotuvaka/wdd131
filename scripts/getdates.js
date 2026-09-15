const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;


// Static weather values
const temperature = 9;
const windSpeed = 12;


// Wind chill calculation
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16);
}


// Display wind chill when conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById("wind-chill").textContent =
        `${windChill.toFixed(1)} °C`;
} else {
    document.getElementById("wind-chill").textContent = "N/A";
}