// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;

    // Functions can call other functions
function doubleAddition(65, 34) {
    var total = addition(65, 34) * 2;
    return total;

    => addition(c, d) * 2;

    function listLoop(userList) {
        for (var i = 0; i < userList.length; i++) {
          console.log(userList[i]);
        }
        var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

        for (var i = 0; i < vegetables.length; i++) {
            console.log("I love " + vegetables[i]);
        }

        for (var i = 0; i < 5; i++) {
            console.log("I am " + i);
         }
         function buildTable(data) {

        }

        function buildTable(data) {
            tbody.html("");
          }
          let row = tbody.append("tr");
          Object.values(dataRow).forEach((val) => {
        });
        let cell = row.append("td")
        cell.text(val);
        data.forEach((dataRow) => {
            let row = tbody.append("tr");
            Object.values(dataRow).forEach((val) => {
              let cell = row.append("td");
              cell.text(val);
              }
            );
          });
          {
            datetime: "1/1/2010",
            city: "benton",
            state: "ar",
            country: "us",
            shape: "circle",
            durationMinutes: "5 mins.",
            comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
          },

          function buildTable(data) {
            // First, clear out any existing data
            tbody.html("");
          
            // Next, loop through each object in the data
            // and append a row and cells for each value in the row
            data.forEach((dataRow) => {
              // Append a row to the table body
              let row = tbody.append("tr");
          
              // Loop through each field in the dataRow and add
              // each value as a table cell (td)
              Object.values(dataRow).forEach((val) => {
                let cell = row.append("td");
                cell.text(val);
                }
              );
            });
          }
          