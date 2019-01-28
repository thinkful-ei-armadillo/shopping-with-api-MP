'use strict';
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mp';
  const headers = {
    'Content-Type': 'application/json'
  };

  function getItems() {
    return fetch(`${BASE_URL}/items`).then(response => response);
  }

  function updateItem(id, updateData) {
    const myInit = {
      method: 'PATCH',
      headers,
      body: JSON.stringify(updateData)
    };

    return fetch(`${BASE_URL}/items/${id}`, myInit);
  }

  function createItem(name) {
    const newItem = JSON.stringify({
      name
    });

    const myInit = { method: 'POST', headers, body: newItem };

    return fetch(`${BASE_URL}/items`, myInit);
  }

  function deleteItem(id) {
    const myInit = { method: 'DELETE', headers };

    return fetch(`${BASE_URL}/items/${id}`, myInit);
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();
