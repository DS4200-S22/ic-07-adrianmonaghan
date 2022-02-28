/*

In-class activity 08 starter code
Adrian Monaghan
Modified: 12/08/21 

*/

// Build your scatterplot in this file 

// const width = 900;
// const height = 450;
// const margin = {left:50, right:50, bottom:50, top:50};
// const yTooltipOffset = 15;


const svg3 = d3
    .select("#csv-scatter")  // selects the div with the id "hard-coded-bar"
    .append("svg")  // adds an svg to the selected div
    .attr("width", width-margin.left-margin.right)  // the width attribute is set to give space on the left and right sides
    .attr("height", height - margin.top - margin.bottom)  // the height attribute is set to give space on the tom and bottom of the page
    .attr("viewBox", [0, 0, width, height]); // sets the size of the chart

const tooltip3 = d3.select("#csv-scatter")  // selects the div and sets it equal to tooltip1
    .append("div")  // adds a new div
    .attr('id', "tooltip3") // id = tooltip1
    .style("opacity", 0)  // opacity = 0 (can't be seen)
    .attr("class", "tooltip");  // sets class to tooltip

// TODO: What does each line of this code do?
const mouseover3 = function(event, d) {  // mouseover function definition
    tooltip2.html("Day: " + d.day + "<br> Score: " + d.score + "<br>")  // adds this html to the tooltip div html
        .style("opacity", 1);  // sets the opacity to 1 so it can be seen
}

// TODO: What does each line of this code do?
const mousemove3 = function(event, d) {  // mouse movement function
    tooltip2.style("left", (event.pageX)+"px")  // sets the left hand bound of the tooltip to the cursor
        .style("top", (event.pageY + yTooltipOffset) +"px");  // sets the upper bound for the tooltip
}

// TODO: What does this code do?
const mouseleave3 = function(event, d) {  // when the mouse leaves the bar the opacity is set to 0 and the tooltip disappears
    tooltip2.style("opacity", 0);
}




d3.csv("data/scatter.csv").then((data) => {
    let maxX = d3.max(data, function(d)  {return d.day});
    let maxY = d3.max(data, function(d)  {return d.score});
    // let minX = d3.min(data, function(d)  {return d.x});
    // let minY = d3.min(data, function(d)  {return d.x});

    let xScale = d3.scaleLinear() // linear scale because we have
        // linear data
        .domain([0, maxX])  // inputs for the function
        .range([margin.left, width - margin.right]);
    // ^ outputs for the function

    let yScale = d3.scaleLinear()
        .domain([0, maxY])
        .range([height - margin.bottom, margin.top]);

// Add x axis to svg6
    svg3.append("g") // g is a "placeholder" svg
        .attr("transform", `translate(0,${height - margin.bottom})`)
        // ^ moves axis to bottom of svg
        .call(d3.axisBottom(xScale)) // built in function for bottom
        // axis given a scale function
        .attr("font-size", '20px'); // set font size

// Add y axis to svg6
    svg3.append("g") // g is a "placeholder" svg
        .attr("transform", `translate(${margin.left}, 0)`)
        // ^ move axis inside of left margin
        .call(d3.axisLeft(yScale)) // built in function for left
        // axis given a scale function
        .attr("font-size", '20px'); // set font size


    svg3.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => xScale(d.day)) // use xScale to return
        // pixel value for given
        // datum
        .attr("cy", (d) => yScale(d.score)) // use yScale to return
        // pixel value for given
        // datum
        .attr("r", 10)
        .attr("class", "myFirstPlot")
        .on("mouseover", mouseover3)
        .on("mousemove", mousemove3)
        .on("mouseleave", mouseleave3);

});






