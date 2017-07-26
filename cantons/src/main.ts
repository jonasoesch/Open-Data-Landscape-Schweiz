import * as d3 from 'd3';
import * as topojson from 'topojson';



var width = 960,
    height = 500;

var svg = d3.select('#swiss');

var colors = {"Nein": '#FDFDFF', "Teilweise": '#C6C5B9', "Ja": "#62929E"};
var colors2 = [ "#f3ffbd", "#b2dbbf", "#70c1b3", "#247ba0"];

d3.json('cantons.data.json', function(err, cantons){

    opendata();

    svg.selectAll('#lakes *')
        .attr('fill', "#546A7B");

    svg.selectAll("#borders").attr('stroke', '#444545')

    document.getElementById('opendata').addEventListener('click', function(){opendata()});
    document.getElementById('og').addEventListener('click', function(){oeffentlichkeitsgesetz()});



    function oeffentlichkeitsgesetz () {
        svg.selectAll('#cantons g:first-child *')//.call((function(g) {console.log(g)} as any));
            .attr('fill', function(canton) {return colors[cantons[this.id]['öffentlichkeitsgesetz']]} as any);

        legend(Object.keys(colors).map(key => colors[key]), ['Kein Öffentlichkeitsprinzip', ' Evaluation', 'In Vorbereitung', 'Publikation']);
    }

    function opendata() {
        svg.selectAll("#cantons g:first-child *")
            .attr('fill', function() {return colors2[cantons[this.id]['opendata']]} as any)

        legend(colors2, ['Keine Angaben', 'In Evaluation', 'In Vorbereitung', 'Publikation']);
    }
});



function legend(colors:string[], texts:string[]) {

    d3.selectAll('#cantons .legend').remove();

    let legend = d3.select('#cantons')
        .append('g')
            .attr('class', 'legend');

        function legendPosition ( i:number, shift:number=0 ):string {
            return String(i*4+85+shift) + '%';
        }

        legend.selectAll('rect')
            .data(colors)
            .enter()
            .append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('x', '76%')
            .attr('y', (d, i) => legendPosition(i))
            .attr('fill', function(d):string{return d});


        legend.selectAll('text')
            .data(colors)
            .enter()
            .append('text')
            .attr('x', '79%')
            .attr('y', (d, i) => legendPosition(i, 2))
            .attr('fill', '#333')
            .attr('font-family', 'sans-serif')
            .attr('font-size', '0.8em')
            .text(function(d, i):string{
                return texts[i];
            });


}


/*

var path = d3.geoPath()
    .projection(null);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("ch-cantons-b.json", function(error, ch) {
    if (error) throw error;

    svg.append("g")
        .attr("class", "feature feature--canton")
        .selectAll("path")
        .data(topojson.feature(ch, (ch as any).objects.cantons).features)
        .enter().append("path")
        .attr("d", path)
        .attr('class', 'canton')
        .attr('fill', "orange");

   /* svg.append("g")
        .attr("class", "feature feature--lake")
        .selectAll("path")
        .data(topojson.feature(ch, (ch as any).objects.lakes).features)
        .enter().append("path")
        .attr("d", path);

    svg.append("path")
        .datum(topojson.mesh(ch, (ch as any).objects.cantons, function(a, b) { return a !== b; }))
        .attr("class", "boundary boundary--cantons")
        .style("stroke-width", "1px")
        .attr("d", path);
});


var width = 960,
    height = 600;

var projection = d3.geoAlbers()
    .rotate([0, 0])
    .center([8.3, 46.8])
    .scale(16000)
    .translate([width / 2, height / 2])
    .precision(.1);

var path = d3.geoPath()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("ch-cantons-b.json", function(error, swiss) {
    if (error) throw error;

    var cantons = topojson.feature(swiss, (swiss as any).objects.cantons);



    svg.append("path")
        .datum(cantons)
        .attr("class", "canton")
        .attr("d", path);

    svg.append("path")
        .datum(topojson.mesh(swiss, (swiss as any).objects.cantons, function(a, b) { return a !== b; }))
        .attr("class", "canton-boundary")
        .attr("d", path);



    svg.selectAll('.canton')
        .data(cantons.features)
        .enter().append('g')
        .attr("fill", (function(f, i) { console.log(i); return oeffentlichkeitsprinzip[f.properties['öffentlichkeitsprinzip']]} as any))


    svg.selectAll("text")
        .data(cantons.features)
        .enter().append("text")
        .attr("transform", function(d) { return "translate(" + path.centroid((d as any)) + ")"; })
        .attr("dy", ".35em")
        .text(function(d) { return (d as any).properties.name; });


}); */
