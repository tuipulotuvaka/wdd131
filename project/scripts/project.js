const places = [
    {
        name: "Nuku'alofa",
        category: "culture",
        description: "The capital of Tonga and an important center for government, community, shopping, and culture.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Ha'amonga 'a Maui",
        category: "history",
        description: "A famous ancient stone monument connected with Tongan history and traditional stories.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Vava'u",
        category: "nature",
        description: "An island group known for beautiful waters, coastal scenery, and marine experiences.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Tongatapu",
        category: "culture",
        description: "The main island group where visitors can experience communities, landmarks, food, and traditions.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Eua",
        category: "nature",
        description: "An island with forests, coastal views, and opportunities to experience Tonga's natural environment.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80"
    },
    {
        name: "Royal Palace Area",
        category: "history",
        description: "An important area of Nuku'alofa connected with Tonga's royal heritage and national identity.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80"
    }
];

function setCurrentYear() {
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupNavigation() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#main-nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");

            const isOpen = navigation.classList.contains("open");

            if (isOpen) {
                menuButton.setAttribute("aria-label", "Close navigation menu");
            } else {
                menuButton.setAttribute("aria-label", "Open navigation menu");
            }
        });
    }
}

function displayPlaces(filter = "all") {
    const container = document.querySelector("#places-container");

    if (!container) {
        return;
    }

    const filteredPlaces = filter === "all"
        ? places
        : places.filter((place) => place.category === filter);

    if (filteredPlaces.length === 0) {
        container.innerHTML = `<p>No places were found in this category.</p>`;
        return;
    }

    container.innerHTML = filteredPlaces.map((place) => `
        <article class="place-card">
            <img
                src="${place.image}"
                alt="${place.name}"
                width="900"
                height="560"
                loading="lazy">
            <div class="place-card-content">
                <span class="place-category">${place.category}</span>
                <h3>${place.name}</h3>
                <p>${place.description}</p>
            </div>
        </article>
    `).join("");
}

function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-button");

    if (filterButtons.length === 0) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((item) => {
                item.classList.remove("active-filter");
            });

            button.classList.add("active-filter");

            const selectedFilter = button.dataset.filter;

            displayPlaces(selectedFilter);
        });
    });
}

function setupTravelForm() {
    const form = document.querySelector("#travel-form");
    const result = document.querySelector("#form-result");
    const favoriteMessage = document.querySelector("#favorite-message");

    if (!form || !result) {
        return;
    }

    const savedActivity = localStorage.getItem("tongaFavoriteActivity");

    if (savedActivity && favoriteMessage) {
        favoriteMessage.textContent = `Your saved favorite activity is ${savedActivity}.`;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#visitor-name").value.trim();
        const activity = document.querySelector("#favorite-activity").value;
        const message = document.querySelector("#message").value.trim();

        if (!name || !activity) {
            result.textContent = "Please complete your name and favorite activity.";
            return;
        }

        localStorage.setItem("tongaFavoriteActivity", activity);

        const reviewCount = Number(localStorage.getItem("tongaReviewCount") || 0) + 1;

        localStorage.setItem("tongaReviewCount", reviewCount);

        if (message) {
            result.innerHTML = `
                Thank you, ${name}! Your favorite activity is ${activity}.
                Your message has also been saved for this session.
            `;
        } else {
            result.innerHTML = `
                Thank you, ${name}! Your favorite activity is ${activity}.
                We hope you enjoy exploring Tonga.
            `;
        }

        if (favoriteMessage) {
            favoriteMessage.textContent = `Your saved favorite activity is ${activity}.`;
        }

        form.reset();
    });
}

function initializePage() {
    setCurrentYear();
    setupNavigation();
    displayPlaces();
    setupFilters();
    setupTravelForm();
}

initializePage();