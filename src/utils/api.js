const baseUrl = 'http://localhost:3001';

// This gets ALL the clothing items
 function getItems() {
    return fetch(`${baseUrl}/items`)
      .then(response => response.json());
  }

  function addItem(item) {
    return fetch(`${baseUrl}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(response => response.json());
  }

  // This removes a specific clothing item
function deleteItem(id) {
    return fetch(`${baseUrl}/items/${id}`, {
      method: 'DELETE'
    });
  }

  export {getItems, addItem, deleteItem};