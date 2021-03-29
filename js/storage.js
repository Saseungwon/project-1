function loadItem(value) {
    return JSON.parse(localStorage.getItem(value));
};

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
