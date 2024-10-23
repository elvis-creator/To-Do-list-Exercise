const addEl = document.getElementById("add");
const display = document.getElementById("taskdisplay");

addEl.addEventListener('click', (event) => {
   event.preventDefault();
    const textEl = document.getElementById("text").value;
    
if (textEl.trim() === '') return;
    // Create new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = textEl;
    listItem.classList.add('list');
    display.appendChild(listItem);


    // Clear the input field
    document.getElementById("text").value = '';
});


