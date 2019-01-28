'use strict';
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mp';

  function getItems() {
    return fetch(`${BASE_URL}/items`).then(response => response);
  }

  function createItem(name) {
    const newItem = JSON.stringify({
      name
    });

    const myHeaders = {
      'Content-Type': 'application/json'
    };

    const myInit = { method: 'POST', headers: myHeaders, body: newItem };

    return fetch(`${BASE_URL}/items`, myInit);
  }

  return {
    getItems,
    createItem
  };
})();
