const baseUrl = 'http://localhost:3001';

// This gets ALL the clothing items
 function getItems() {
    return fetch(`${baseUrl}/items`).then(checkResponse);
  }

  function addItem(item) {
    return fetch(`${baseUrl}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(checkResponse);
  }

  // This removes a specific clothing item
function deleteItem(id) {
    return fetch(`${baseUrl}/items/${id}`, {
      method: 'DELETE'
    }).then(checkResponse);
  }

  // Check if all repsonses are ok
  function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  export {getItems, addItem, deleteItem};