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
