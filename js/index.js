import Map from './components/Map.html';
import * as topojson from 'topojson';

const map = new Map({
    target: document.querySelector('#map')
});

window.map = map;
window.topojson = topojson;