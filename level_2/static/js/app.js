// from data.js
var tableData = data;

/* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file 
provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, 
write code that appends a table to your web page and then adds new rows of data for 
each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, 
  and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for 
events and search through the `date/time` column to find rows that match user input. */

// when someone clicks on the button, the filtering and table drawing will occur
d3.select("#filter-btn").on("click", filterTable);

// this function will filter the data based on the users input
function filterTable() {

  // reinitalize the table. 
  // if we don't do this, the data will keep filtering off of the previous filter values.
  tableData = data;

  // grab the values that the user input
  var datetime = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");
  var filterList = [];
  filterList.push(datetime, city, state, country, shape);

  d3.event.preventDefault();

  // loop through all of the items that the user input
  for (var i=0; i<filterList.length; i++) {

    // look to see if the user input a value for that section
    if (filterList[i]) {
      // if they did, print that value to the console
      console.log(filterList[i]);

      // I wanted to figure out a way to do this within a loop. I got hung up on this for a long time
      // for each possible user input, filter the table data for that input
      if (i==0) {
        tableData = tableData.filter(data => data.datetime == filterList[i]);
        console.log(tableData);
      }
      if (i==1) {
        tableData = tableData.filter(data => data.city == filterList[i]);
        console.log(tableData);
      }
      if (i==2) {
        tableData = tableData.filter(data => data.state == filterList[i]);
        console.log(tableData);
      }
      if (i==3) {
        tableData = tableData.filter(data => data.country == filterList[i]);
        console.log(tableData);
      }
      if (i==4) {
        tableData = tableData.filter(data => data.shape == filterList[i]);
        console.log(tableData);
      }
    }

    // once the data is filtered, draw the table. feed this function the filtered data
    drawTable(tableData);

  }
}

// this is the function that does the table drawing. 
// this function takes the data that we want to see in the table
function drawTable(ufoData) {

  // find the tbody tag in the html
  var tbody = d3.select("tbody");

  // loop though each element in the data
  ufoData.forEach(function(ufoReport) {

    // for each element that is found, create a table row in the html 
    var row = tbody.append("tr");

    // grab the key and value for the current data element
    Object.entries(ufoReport).forEach(function([key,value]) {

      // for each key value pair in the data element, create a table data entry in the html and put the value there
      var cell = tbody.append("td");
      cell.text(value);

    });
  });
}
