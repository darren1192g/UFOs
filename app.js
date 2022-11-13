// import the data from data.js
const tableData = data; 
// Reference the HTML table usind d3
let tbody = d3.select("tbosy");

function buildTable(data) {
    tbody.html("");
}
data.forEach((dataRow) => {
    let row = tbody.append("tr");
Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});
function buildTable(data) {
    // First, clear out ony existing data
    tbody.html("");

    // next, loop through each object in the data
    // and append a row and cells for each calue in the row
    data.forEach((dataRow) =>{
        //append a row to the table body
        let row = tbody.append('tr');

        //lop through each field in the dataRow and add
        // each values as a table cell (td)
        object.values(dataRow.forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            
        });
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);