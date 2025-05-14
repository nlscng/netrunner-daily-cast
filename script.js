
async function fetchRandomCard() {
  const response = await fetch("https://netrunnerdb.com/api/2.0/public/cards");
  const data = await response.json();
  const cards = data.data;
  const card = cards[Math.floor(Math.random() * cards.length)];

  document.getElementById("card-image").src = "https://netrunnerdb.com" + card.imagesrc;
  document.getElementById("card-name").textContent = card.title;
  document.getElementById("card-description").innerHTML = card.text || "No description available.";
  document.getElementById("deck-link").href = `https://netrunnerdb.com/en/search?include=${card.title}`;
  document.getElementById("deck-link").textContent = "Search Decks with This Card";
}

let lastRefresh = 0;
document.getElementById("refresh-button").addEventListener("click", () => {
  const now = Date.now();
  if (now - lastRefresh > 10000) {
    fetchRandomCard();
    lastRefresh = now;
  } else {
    alert("Please wait 10 seconds before refreshing again.");
  }
});

window.addEventListener("load", fetchRandomCard);
