/*

In-class activity 08 starter code
Prof. Mosca & Adrian Monaghan
Modified: 12/08/21 

*/

// Build your bar charts in this file 


// Set dimensions and margins for plots
const width = 900;
const height = 450; 
const margin = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset = 15; 


// TODO: What does this code do?
const svg1 = d3
  .select("#hard-coded-bar")  // selects the div with the id "hard-coded-bar"
  .append("svg")  // adds an svg to the selected div
  .attr("width", width-margin.left-margin.right)  // the width attribute is set to give space on the left and right sides
  .attr("height", height - margin.top - margin.bottom)  // the height attribute is set to give space on the tom and bottom of the page
  .attr("viewBox", [0, 0, width, height]); // sets the size of the chart

// Hardcoded barchart data
const data1 = [
  {name: 'A', score: 92},
  {name: 'B', score: 15},
  {name: 'C', score: 67},
  {name: 'D', score: 89},
  {name: 'E', score: 53},
  {name: 'F', score: 91},
  {name: 'G', score: 18}
];

/*

  Axes

*/ 

// TODO: What does this code do? 
let maxY1 = d3.max(data1, function(d) { return d.score; });  // finds the max score in the data

// TODO: What does each line of this code do?   
let yScale1 = d3.scaleLinear()  // linear scale for linear data on the y axis
            .domain([0,maxY1])  // sets the range of the data from 0 to the max
            .range([height-margin.bottom,margin.top]);

// TODO: What does each line of this code do? 
let xScale1 = d3.scaleBand()  // scale for the different "categories"
            .domain(d3.range(data1.length))  // sets the number of parts on the x axis to the number of data points
            .range([margin.left, width - margin.right])
            .padding(0.1); // sets a spacing between each item on the axis

// TODO: What does each line of this code do?  
svg1.append("g")  // place holder svg
   .attr("transform", `translate(${margin.left}, 0)`) // moves the scale to the left side of the svg
   .call(d3.axisLeft(yScale1)) // builtin in function for left axis scale
   .attr("font-size", '20px'); // sets the font size

// TODO: What does each line of this code do? 
svg1.append("g") // place holder svg
    .attr("transform", `translate(0,${height - margin.bottom})`)  // moves the scale to the bottom of the svg
    .call(d3.axisBottom(xScale1)  // built in function to make the bottom axis
            .tickFormat(i => data1[i].name))  // sets each tick to the value of the data
    .attr("font-size", '20px');  // font size

/* 

  Tooltip Set-up  

*/

// TODO: What does each line of this code do? 
const tooltip1 = d3.select("#hard-coded-bar")  // selects the div and sets it equal to tooltip1
                .append("div")  // adds a new div
                .attr('id', "tooltip1") // id = tooltip1
                .style("opacity", 0)  // opacity = 0 (can't be seen)
                .attr("class", "tooltip");  // sets class to tooltip

// TODO: What does each line of this code do?  
const mouseover1 = function(event, d) {  // mouseover function definition
  tooltip1.html("Name: " + d.name + "<br> Score: " + d.score + "<br>")  // adds this html to the tooltip div html
          .style("opacity", 1);  // sets the opacity to 1 so it can be seen
}

// TODO: What does each line of this code do? 
const mousemove1 = function(event, d) {  // mouse movement function
  tooltip1.style("left", (event.pageX)+"px")  // sets the left hand bound of the tooltip to the cursor
          .style("top", (event.pageY + yTooltipOffset) +"px");  // sets the upper bound for the tooltip
}

// TODO: What does this code do? 
const mouseleave1 = function(event, d) {  // when the mouse leaves the bar the opacity is set to 0 and the tooltip disappears
  tooltip1.style("opacity", 0); 
}

/* 

  Bars 

*/

// TODO: What does each line of this code do? 
svg1.selectAll(".bar")  // selects all tags with bar
   .data(data1)  // sets the data
   .enter()  // passes the data
   .append("rect")  // adds a rectangle to the barchar
     .attr("class", "bar")  // sets the class to bar
     .attr("x", (d,i) => xScale1(i))  // sets the x position using the scale function defined earlier
     .attr("y", (d) => yScale1(d.score))  // sets the y position using the scale function defined earlier
     .attr("height", (d) => (height - margin.bottom) - yScale1(d.score))  // defines the height of the function
     .attr("width", xScale1.bandwidth())  // sets the width of the bar
     .on("mouseover", mouseover1)  // sets the mouseover function
     .on("mousemove", mousemove1)  // sets the mousemovem function
     .on("mouseleave", mouseleave1);  // sets the mouseleave function




// BARCHART FROM DATA

const svg2 = d3
    .select("#csv-bar")  // selects the div with the id "hard-coded-bar"
    .append("svg")  // adds an svg to the selected div
    .attr("width", width-margin.left-margin.right)  // the width attribute is set to give space on the left and right sides
    .attr("height", height - margin.top - margin.bottom)  // the height attribute is set to give space on the tom and bottom of the page
    .attr("viewBox", [0, 0, width, height]); // sets the size of the chart

const tooltip2 = d3.select("#csv-bar")  // selects the div and sets it equal to tooltip1
    .append("div")  // adds a new div
    .attr('id', "tooltip2") // id = tooltip1
    .style("opacity", 0)  // opacity = 0 (can't be seen)
    .attr("class", "tooltip");  // sets class to tooltip

// TODO: What does each line of this code do?
const mouseover2 = function(event, d) {  // mouseover function definition
  tooltip2.html("Name: " + d.name + "<br> Score: " + d.score + "<br>")  // adds this html to the tooltip div html
      .style("opacity", 1);  // sets the opacity to 1 so it can be seen
}

// TODO: What does each line of this code do?
const mousemove2 = function(event, d) {  // mouse movement function
  tooltip2.style("left", (event.pageX)+"px")  // sets the left hand bound of the tooltip to the cursor
      .style("top", (event.pageY + yTooltipOffset) +"px");  // sets the upper bound for the tooltip
}

// TODO: What does this code do?
const mouseleave2 = function(event, d) {  // when the mouse leaves the bar the opacity is set to 0 and the tooltip disappears
  tooltip2.style("opacity", 0);
}




d3.csv("data/barchart.csv").then((data2) => {

  let maxY2 = d3.max(data2, function(d) { return d.score; });

  let yScale2 = d3.scaleLinear()  // linear scale for linear data on the y axis
      .domain([0,maxY2])  // sets the range of the data from 0 to the max
      .range([height-margin.bottom,margin.top]);

  let xScale2 = d3.scaleBand()  // scale for the different "categories"
      .domain(d3.range(data2.length))  // sets the number of parts on the x axis to the number of data points
      .range([margin.left, width - margin.right])
      .padding(0.1); // sets a spacing between each item on the axis

  svg2.append("g")  // place holder svg
      .attr("transform", `translate(${margin.left}, 0)`) // moves the scale to the left side of the svg
      .call(d3.axisLeft(yScale2)) // builtin in function for left axis scale
      .attr("font-size", '20px'); // sets the font size

// TODO: What does each line of this code do?
  svg2.append("g") // place holder svg
      .attr("transform", `translate(0,${height - margin.bottom})`)  // moves the scale to the bottom of the svg
      .call(d3.axisBottom(xScale2)  // built in function to make the bottom axis
          .tickFormat(i => data2[i].name))  // sets each tick to the value of the data
      .attr("font-size", '20px');  // font size

  svg2.selectAll(".bar")
      .data(data2)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d,i) => xScale2(i))
      .attr("y", (d) => yScale2(d.score))
      .attr("height", (d) => (height - margin.bottom) - yScale1(d.score))
      .attr("width", xScale2.bandwidth())
      .on("mouseover", mouseover2)
      .on("mousemove", mousemove2)
      .on("mouseleave", mouseleave2);



});
