import {select, selectAll} from 'd3-selection';
import {json} from 'd3-request';
import {geoPath, geoMercator} from 'd3-geo';
import * as topojson from 'topojson';

var width = parseInt(select('#map').style('width'), 10);
var height = width * .5;
var towns;

var projection = geoMercator()
    .center([-71.3824374, 42.4072107])
    .scale(width * 10)
    //.translate([width / 2, height / 2]);

var path = geoPath()
    .projection(projection);

var map = select('#map').append('svg')
    .style('width', width + 'px')
    .style('height', height + 'px');

json('data/towns.json', function(err, data) {
    if (err) throw err;
    
    window.data = data;
    var bounds = topojson.feature(data, data.objects.TOWNS_POLYM);
    
    towns = map.selectAll('path.town')
        .data(bounds.features)
      .enter().append('path')
        .attr('class', 'town')
        .attr('d', path);

});


window.map = map;
window.topojson = topojson;
window.path = path;
window.projection = projection;