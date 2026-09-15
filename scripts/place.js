const today = new Date();


// Footer
document.getElementById("currentyear").textContent =
    today.getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;


// Static weather values
const temperature = 9;
const windSpeed = 12;


// Wind Chill Calculation
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16);
}


// Display Wind Chill
if (temperature <= 10 && windSpeed > 4.8) {

    const windChill = calculateWindChill(
        temperature,
        windSpeed
    );

    document.getElementById("windchill").textContent =
        `${windChill.toFixed(1)} °C`;

} else {

    document.getElementById("windchill").textContent = "N/A";
}