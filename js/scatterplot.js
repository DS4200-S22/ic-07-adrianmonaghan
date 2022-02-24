/*

In-class activity 08 starter code
Adrian Monaghan
Modified: 12/08/21 

*/

// Build your scatterplot in this file 

const width = 900;
const height = 450;
const margin = {left:50, right:50, bottom:50, top:50};
const yTooltipOffset = 15;


const svg = d3
    .select("#csv-scatter")  // selects the div with the id "hard-coded-bar"
    .append("svg")  // adds an svg to the selected div
    .attr("width", width-margin.left-margin.right)  // the width attribute is set to give space on the left and right sides
    .attr("height", height - margin.top - margin.bottom)  // the height attribute is set to give space on the tom and bottom of the page
    .attr("viewBox", [0, 0, width, height]); // sets the size of the chart



d3.csv("data/scatter.csv").then((data) => {
    let maxX = d3.max(data, function(d)  {return d.x});
    let maxY = d3.max(data, function(d)  {return d.y});
    let minX = d3.min(data, function(d)  {return d.x});
    let minY = d3.min(data, function(d)  {return d.x});

    let yScale = d3.scaleLinear()  // linear scale for linear data on the y axis
        .domain([minY,maxY])  // sets the range of the data from 0 to the max
        .range([height-margin.bottom,margin.top]);

    let xScale = d3.scaleLinear()  // scale for the different "categories"
        .domain([minX, maxX])  // sets the number of parts on the x axis to the number of data points
        .range([margin.left, width - margin.right]);

    svg1.append("g")  // place holder svg
        .attr("transform", `translate(${margin.left}, 0)`) // moves the scale to the left side of the svg
        .call(d3.axisLeft(yScale)) // builtin in function for left axis scale
        .attr("font-size", '20px'); // sets the font size

    svg1.append("g")  // place holder svg
        .attr("transform", `translate(${height - margin.bottom}, 0)`) // moves the scale to the left side of the svg
        .call(d3.axisLeft(xScale)) // builtin in function for left axis scale
        .attr("font-size", '20px'); // sets the font size




});






