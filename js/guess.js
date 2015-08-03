var d3 = require('d3');
var topojson = require('topojson');

var width = parseInt(d3.select('#map').style('width'), 10);
var height = width * .5;
var towns;

var projection = d3.geo.mercator()
    .center([-71.3824374, 42.4072107])
    .scale(width * 10)
    //.translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var map = d3.select('#map').append('svg')
    .style('width', width + 'px')
    .style('height', height + 'px');

d3.json('data/towns.json', function(data) {
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