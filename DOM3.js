document.getElementById('add-item').addEventListener('click', addItem);

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName === '' || itemQuantity === '') {
        alert('Please enter both item name and quantity.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'shopping-list-item';

    const itemText = document.createElement('span');
    itemText.textContent = `${itemName} (x${itemQuantity})`;
    listItem.appendChild(itemText);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editItem(listItem, itemText));
    listItem.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeItem(listItem));
    listItem.appendChild(removeButton);

    document.getElementById('shopping-list').appendChild(listItem);

    // Clear the input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}

function editItem(listItem, itemText) {
    const itemName = prompt('Edit item name:', itemText.textContent.split(' (x')[0]);
    const itemQuantity = prompt('Edit quantity:', itemText.textContent.split(' (x')[1].slice(0, -1));

    if (itemName !== null && itemQuantity !== null) {
        itemText.textContent = `${itemName} (x${itemQuantity})`;
    }
}

function removeItem(listItem) {
    document.getElementById('shopping-list').removeChild(listItem);
}
