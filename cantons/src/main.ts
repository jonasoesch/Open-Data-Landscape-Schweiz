import * as d3 from 'd3';
import * as topojson from 'topojson';



var svg = d3.select('#map svg');
//var colorscheme = ['#FFFF9D', '#BEEB9F', '#79BD8F', '#00A388'];
let colorscheme = ['#D9CF99', '#9FBF8F', '#81A68A', '#579E9C'];

//var colors = {"Nein": '#FDFDFF', "Teilweise": '#C6C5B9', "Ja": "#62929E"};
//var colors2 = [ "#f3ffbd", "#b2dbbf", "#70c1b3", "#247ba0"];

d3.json('cantons.data.json', function(err, cantons){

    opendata();


    svg.selectAll("#borders").attr('stroke', '#444545');

    document.getElementById('opendata').addEventListener('click', function(){opendata()});
    document.getElementById('og').addEventListener('click', function(){oeffentlichkeitsgesetz()});



    function oeffentlichkeitsgesetz () {
        svg.selectAll('#cantons polygon, #cantons path')//.call((function(g) {console.log(g)} as any));
            .attr('fill', function(canton) { return colorscheme[cantons['cantons'][this.id]['öffentlichkeitsgesetz']]} as any);

        svg.selectAll('#cities, #city-labels').attr('class', 'hidden');

        legend(colorscheme, ['Keine Information', 'Nein', 'Teilweise', 'Ja']);

        d3.selectAll('.active').attr('class', '');
        d3.select('#og').attr('class', 'active');


    }

    function opendata() {
        svg.selectAll("#cantons polygon, #cantons path")
            .attr('fill', function() { return colorscheme[cantons['cantons'][this.id]['opendata']]} as any);

        svg.selectAll("#cities polygon")
            .attr('fill', function() {  return colorscheme[cantons['cities'][this.id]['opendata']]} as any);

        svg.selectAll('#cities, #city-labels').attr('class', '');

        legend(colorscheme, ['Keine Information', 'In Evaluation', 'In Vorbereitung', 'Publikation']);

        d3.selectAll('.active').attr('class', '');
        d3.select('#opendata').attr('class', 'active');
    }
});



function legend(colors:string[], texts:string[]) {

    d3.selectAll('#cantons .legend').remove();

    let legend = d3.select('#cantons')
        .append('g')
            .attr('class', 'legend');

        function legendPosition ( i:number, shift:number=0 ):string {
            return String(i*18+15+shift) + 'px';
        }

        legend.selectAll('rect')
            .data(colors)
            .enter()
            .append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('x', '0px')
            .attr('y', (d, i) => legendPosition(i))
            .attr('fill', function(d):string{return d});


        legend.selectAll('text')
            .data(colors)
            .enter()
            .append('text')
            .attr('x', '20px')
            .attr('y', (d, i) => legendPosition(i, 10))
            .attr('fill', '#333')
            .attr('font-family', 'sans-serif')
            .attr('font-size', '0.8em')
            .text(function(d, i):string{
                return texts[i];
            });


}
