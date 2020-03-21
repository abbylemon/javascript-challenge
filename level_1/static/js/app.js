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


// YOUR CODE HERE!

var inputField = d3.select("#datetime");

function handleFiltering() {

  d3.event.preventDefault();

  var newDate = d3.event.target.value;
  console.log(newDate);

  var filteredData = tableData.filter(date => date.datetime === newDate);
  console.log(filteredData);

  var tbody = d3.select("tbody");

  filteredData.forEach(function(ufoReport) {
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key,value]) {
      console.log(key, value);

      var cell = tbody.append("td");
      cell.text(value);
    })
  })
}

inputField.on("change", handleFiltering);
