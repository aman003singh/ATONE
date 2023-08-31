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
    image.src = imageUrl;

    // Create a paragraph for the name
    const nameParagraph = document.createElement('h3');
    nameParagraph.textContent = name;
    nameParagraph.className = "cardtext";

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'POP';
    deleteButton.className = 'popbutton';
    deleteButton.addEventListener('click', function () {
        card.remove();
    });

    // Append elements to the card
    anchor.appendChild(image);
    card.appendChild(anchor);
    card.appendChild(nameParagraph);
    card.appendChild(deleteButton);

    // Append the card to the card container
    const cardContainer = document.getElementById('rightbox');
    cardContainer.appendChild(card);

    // Clear input fields
    document.getElementById('imageUrl').value = '';
    document.getElementById('url').value = '';
    document.getElementById('name').value = '';
}


function Show() {
    div = document.getElementById("things");
    div.innerHTML = "Hola, Welcome to Atone or (At One) here you can save and share your various websites and prototypes ";
    div.className = "show";
}



function Hide() {
    div = document.getElementById("things");
    div.innerHTML = "";

}






