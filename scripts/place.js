const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent = document.lastModified;


const temperature = 9;
const windSpeed = 12;


function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}


const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {

    const windChill = calculateWindChill(temperature, windSpeed);

    windChillElement.textContent = `${windChill.toFixed(1)} °C`;

} else {

    windChillElement.textContent = "N/A";

}