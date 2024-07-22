document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('listform');
  const input = document.getElementById('shopping-list-entry');
  const shoppingList = document.querySelector('.shopping-list-items');

  let items = [];

  // Load items from localStorage
  if (localStorage.getItem('shoppingListItems')) {
    items = JSON.parse(localStorage.getItem('shoppingListItems'));
    items.forEach(item => createListItem(item));
  }

  // Save items to localStorage
  function saveItems() {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }

  // Create a new item in the shopping list
  function createListItem(itemName) {
    const li = document.createElement('li');
    li.className = 'shopping-list-item';

    const span = document.createElement('span');
    span.className = 'item-name';
    span.textContent = itemName;

    const div = document.createElement('div');
    div.className = 'item-controls';

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', function() {
      const newItemName = prompt('Edit item:', itemName);
      if (newItemName && newItemName.trim() !== '') {
        span.textContent = newItemName;
        itemName = newItemName;
        saveItems();
      }
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
      li.remove();
      items = items.filter(item => item !== itemName);
      saveItems();
    });

    div.appendChild(editButton);
    div.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(div);

    shoppingList.appendChild(li);

    // Toggle completed class on click of item name (span)
    span.addEventListener('click', function() {
      li.classList.toggle('completed');
      saveItems();
    });

    // Clear input field after adding item to the main list
    input.value = '';

    // Add item to the items array and save to localStorage
    items.push(itemName);
    saveItems();
  }

  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = input.value.trim();
    if (itemName !== '') {
      createListItem(itemName);
    }
  });

});
