// Ready the DOM elements
const searchInput = document.getElementById("searchInput");
const breedContainer = document.getElementById("breedList");

// Ready breeds variable
let allBreeds = [];


// Request a small list of breeds from the API
fetch("https://catfact.ninja/breeds?limit=6")
    .then(response => response.json())
    .then(data => {
        // Save the complete breed list so the search can filter
        allBreeds = data.data || [];
        renderBreeds(allBreeds);
    });

// Listen for text input and filter the list as the user types.
searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();

    // If the input is empty, show the full list again.
    if (!query) {
        renderBreeds(allBreeds);
        return;
    }

    // Filter the breed names by the current query.
    const filteredBreeds = allBreeds.filter(breed =>
        breed.breed.toLowerCase().includes(query)
    );

    renderBreeds(filteredBreeds);
});

// Search
function renderBreeds(breeds) {
    // Clear the old cards
    breedContainer.innerHTML = "";

    // Create a card for each breed result.
    breeds.forEach(breed => {
        const breedDiv = document.createElement("a");
        breedDiv.className = "breed-card";
        breedDiv.href = `https://www.google.com/search?q=${encodeURIComponent(`${breed.breed} +"Cat Breed"`)}`;

        // Build the card
        breedDiv.innerHTML = `
            <h2>${breed.breed}</h2>
            <h3>${breed.country}</h3>
            <p>Coat: ${breed.coat}</p>
        `;

        breedContainer.appendChild(breedDiv); // Add the card to the container
    });
}
