function generateCard() {
    const imageUrl = document.getElementById('imageUrl').value;
    const url = document.getElementById('url').value;
    const name = document.getElementById('name').value;

    // Create a new card
    const card = document.createElement('div');
    card.className = 'card';

    // Create an anchor tag
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';

    // Create an image element
    const image = document.createElement('img');
    image.className = 'cardimg';
    if (imageUrl.trim() !== '') {
        image.src = imageUrl;
        image.style.backgroundImage = 'none'; // Remove the background image
      } else {
        alert("image URL bhi dalde bro!");
      }

    // Create a paragraph for the name
    const nameParagraph = document.createElement('h3');
    nameParagraph.textContent = name;
    nameParagraph.className = 'cardtext';

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'POP';
    deleteButton.className = 'popbutton';
    deleteButton.addEventListener('click', function () {
        card.remove();
        saveCards();
    });

    // Append elements to the card
    anchor.appendChild(image);
    card.appendChild(anchor);
    card.appendChild(nameParagraph);
    card.appendChild(deleteButton);

    // Append the card to the card container
    const cardContainer = document.getElementById('rightbox');
    cardContainer.appendChild(card);

    // Save card data to localStorage
    const cardData = { imageUrl, url, name };
    savedCards.push(cardData);
    saveCards();

    // Clear input fields
    document.getElementById('imageUrl').value = '';
    document.getElementById('url').value = '';
    document.getElementById('name').value = '';
}

function Show() {
    div = document.getElementById('things');
    div.innerHTML =
        'Hola, Welcome to Atone or (At One) here you can save and share your various websites and prototypes ';
    div.className = 'show';
}

function Hide() {
    div = document.getElementById('things');
    div.innerHTML = '';
}

// Initialize cards from local storage
const savedCards = JSON.parse(localStorage.getItem('cards')) || [];

// Function to create and display saved cards
function createAndDisplayCards() {
    const cardContainer = document.getElementById('rightbox');
    cardContainer.innerHTML = ''; // Clear existing cards

    savedCards.forEach((cardData) => {
        const { imageUrl, url, name } = cardData;

        const card = document.createElement('div');
        card.className = 'card';

        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';

        const image = document.createElement('img');
        image.src = imageUrl;

        const nameParagraph = document.createElement('h3');
        nameParagraph.textContent = name;
        nameParagraph.className = 'cardtext';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'POP';
        deleteButton.className = 'popbutton';
        deleteButton.addEventListener('click', function () {
            card.remove();
            savedCards.splice(savedCards.indexOf(cardData), 1);
            saveCards();
        });

        anchor.appendChild(image);
        card.appendChild(anchor);
        card.appendChild(nameParagraph);
        card.appendChild(deleteButton);

        cardContainer.appendChild(card);
    });
}

// Function to save cards to local storage
function saveCards() {
    localStorage.setItem('cards', JSON.stringify(savedCards));
}

// Load saved cards when the page loads
window.onload = function () {
    createAndDisplayCards();
};

  
