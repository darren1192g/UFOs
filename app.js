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