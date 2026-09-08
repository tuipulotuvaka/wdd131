const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Salt_Lake_Temple.jpg"
    },

    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl: "images/apia.jpg",
        imageAlt: "Apia Samoa temple"
    },  

    {
        templeName: "Brisbane Australia",
        location: "Brisbane, Queensland, Australia",
        dedicated: "2003, June, 15",
        area: 10700,
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brisbane_Australia_Temple.jpg"
    }
];


const templeContainer = document.querySelector("#temple-container");


function displayTemples(templeList) {
    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("article");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} temple`;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}


function getYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}


function showOldTemples() {
    const filteredTemples = temples.filter((temple) => {
        return getYear(temple) < 1900;
    });

    displayTemples(filteredTemples);
}


function showNewTemples() {
    const filteredTemples = temples.filter((temple) => {
        return getYear(temple) > 2000;
    });

    displayTemples(filteredTemples);
}


function showLargeTemples() {
    const filteredTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(filteredTemples);
}


function showSmallTemples() {
    const filteredTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(filteredTemples);
}


document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    displayTemples(temples);
});


document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();
    showOldTemples();
});


document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    showNewTemples();
});


document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    showLargeTemples();
});


document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    showSmallTemples();
});


const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


document.querySelector("#currentyear").textContent =
    new Date().getFullYear();


document.querySelector("#lastModified").textContent =
    document.lastModified;


displayTemples(temples);