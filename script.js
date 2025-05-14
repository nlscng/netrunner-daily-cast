
const cards = [
    {
        name: "Card 1",
        description: "Description for Card 1",
        image: "https://via.placeholder.com/200",
        deckLink: "https://example.com/deck1"
    },
    {
        name: "Card 2",
        description: "Description for Card 2",
        image: "https://via.placeholder.com/200",
        deckLink: "https://example.com/deck2"
    },
    {
        name: "Card 3",
        description: "Description for Card 3",
        image: "https://via.placeholder.com/200",
        deckLink: "https://example.com/deck3"
    }
];

let lastRefreshTime = 0;

function showRandomCard() {
    const now = Date.now();
    if (now - lastRefreshTime < 10000) {
        alert("Please wait before refreshing again.");
        return;
    }
    lastRefreshTime = now;

    const card = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById("card-image").src = card.image;
    document.getElementById("card-name").textContent = card.name;
    document.getElementById("card-description").textContent = card.description;
    document.getElementById("deck-link").href = card.deckLink;
}

document.getElementById("refresh-button").addEventListener("click", showRandomCard);

window.addEventListener("load", () => {
    showRandomCard();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
    }
});
