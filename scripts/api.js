const api = (function(){
    const BASE_URL = "https://thinkful-list-api.herokuapp.com/mp";

    function getItems(){
        return fetch(`${BASE_URL}/items`)
            .then(response => response);
    }

    return {
        getItems
    };
}());