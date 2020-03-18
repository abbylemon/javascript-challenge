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

// var li = d3.select("ul").append("li");
// li.attr("class", "filter list-group-time");
// var label = li.append("label");
// label.attr("for", "city");
// label.text("")

var datetime = d3.select("#datetime");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");
var filterlist = [];
filterlist.push(datetime, city, state, country, shape);



function handleFiltering() {
  console.log("started filtering");

  filterlist.forEach(function(search) {
    console.log("starting for loop");

    d3.event.preventDefault();

    var newSearch = d3.event.target.value;
    console.log(newSearch);

    var filteredData = tableData.filter(filterSearch => filterSearch.search === newSearch);
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
  });
}

inputField.on("change", handleFiltering);
