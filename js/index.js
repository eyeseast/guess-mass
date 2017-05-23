import Map from './components/Map.html';

const map = new Map({
    target: document.querySelector('#map')
});

window.map = map;