const baseUrl = "http://localhost:3001";

// This gets ALL the clothing items
function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem(item) {
  const token = localStorage.getItem("jwt") || "Unauthorized";
  if (token == "Unauthorized") {
    return Promise.reject(new Error("Token Does Not Exist"));
  }
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}

// This removes a specific clothing item
function deleteItem(id) {
  const token = localStorage.getItem("jwt") || "Unauthorized";
  if (token == "Unauthorized") {
    return Promise.reject(new Error("Token Does Not Exist"));
  }
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

// Adding Card Likes
function addCardLike(id){
  const token = localStorage.getItem("jwt") || "Unauthorized";
  if (token == "Unauthorized") {
    return Promise.reject(new Error("Token Does Not Exist"));
  }
  return fetch(`${baseUrl}/items/${id}/likes`,{
    method: "PUT",
    headers:{
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(checkResponse);
}

// Disliking Card 
function removeCardLike(id){
  const token = localStorage.getItem("jwt") || "Unauthorized";
  if (token == "Unauthorized") {
    return Promise.reject(new Error("Token Does Not Exist"));
  }
  return fetch(`${baseUrl}/items/${id}/likes`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(checkResponse);
}

//Register a new User a.k.a "Create User"
function createUser(user) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(checkResponse);
}

// Sign In User a.k.a "Login User"
function loginUser(user) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(checkResponse);
}

// Update user info a.k.a "Edit Profile"
function updateUser(user) {
  const token = localStorage.getItem("jwt") || "Unauthorized";
  if (token == "Unauthorized") {
    return Promise.reject(new Error("Token Does Not Exist"));
  }
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then(checkResponse);
}

//Checking user token validity
function authorize() {
  const token = localStorage.getItem("jwt") || "Unauthorized";
  if (token == "Unauthorized") {
    return Promise.reject(new Error("Token Does Not Exist"));
  }
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then(checkResponse);
}

// Check if all repsonses are ok
function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export {
  getItems,
  addItem,
  deleteItem,
  checkResponse,
  createUser,
  loginUser,
  authorize,
  updateUser,
  addCardLike,
  removeCardLike,
};
