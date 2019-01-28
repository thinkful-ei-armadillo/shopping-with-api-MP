'use strict';
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mp';
  const headers = {
    'Content-Type': 'application/json'
  };

  function listApiFetch(...args) {
    let error = false;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = true;
        }

        return res.json();
      })
      .then(data => {
        if (error) {
          throw new Error(data.message);
        }
        return data;
      });
  }

  function getItems() {
    return listApiFetch(`${BASE_URL}/items`);
  }

  function updateItem(id, updateData) {
    const myInit = {
      method: 'PATCH',
      headers,
      body: JSON.stringify(updateData)
    };

    return listApiFetch(`${BASE_URL}/items/${id}`, myInit);
  }

  function createItem(name) {
    const newItem = JSON.stringify({
      name
    });
    const myInit = { method: 'POST', headers, body: newItem };

    return listApiFetch(`${BASE_URL}/items`, myInit);
  }

  function deleteItem(id) {
    const myInit = { method: 'DELETE', headers };
    return listApiFetch(`${BASE_URL}/items/${id}`, myInit);
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();
