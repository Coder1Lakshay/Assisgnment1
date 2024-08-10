let inventory = [
  { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
  { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];


function addItem(inventory, item) {
  inventory.push(item);
}


function updateItem(inventory, id, newDetails) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      for (let key in newDetails) {
        if (newDetails.hasOwnProperty(key)) {
          inventory[i][key] = newDetails[key];
        }
      }
      return;
    }
  }
}


function deleteItem(inventory, id) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      inventory.splice(i, 1);
      return;
    }
  }
}


function getItem(inventory, id) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      return inventory[i];
    }
  }
  return null; 
}


function printInventory(inventory) {
  console.log('Inventory List:');
  for (let i = 0; i < inventory.length; i++) {
    console.log(`ID: ${inventory[i].id}, Name: ${inventory[i].name}, Quantity: ${inventory[i].quantity}, Price: ${inventory[i].price}`);
  }
}


console.log("Initial Inventory:");
printInventory(inventory);

console.log("\nAdding item:");
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
printInventory(inventory);

console.log("\nUpdating item:");
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

console.log("\nDeleting item:");
deleteItem(inventory, 2);
printInventory(inventory);
