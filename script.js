// Load the CSV file using PapaParse
Papa.parse("dupes.csv", {
    download: true,
    header: true, // Ensures the first row of the CSV is treated as headers
    complete: function(results) {
        const data = results.data;
        let table = '<table><thead><tr>';

        // Create table headers
        for (let key in data[0]) {
            table += `<th>${key}</th>`;
        }
        table += '</tr></thead><tbody>';

        // Add rows of data
        data.forEach(row => {
            table += '<tr>';
            for (let key in row) {
                table += `<td>${row[key]}</td>`;
            }
            table += '</tr>';
        });

        table += '</tbody></table>';

        // Display the table on the web page
        document.getElementById("table-container").innerHTML = table;
    }
});