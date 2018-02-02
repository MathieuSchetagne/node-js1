
const http = require("http");
const fs = require("fs");
let provinces;

 fs.readFile('provinces.json', 'utf8', (err, data) => {
    if (err) throw err;
    provinces = JSON.parse(data);
   });

http.createServer((request,response) => 
{
    console.log('branchement sur le port 8888')

    let html = "<html>";
    html += "<table>";
    for(let nom in provinces )   {
        html += "<tr>";
        html += "<td>";
        html += nom;
        html += "</td>";
        html += "<td>";
        html += provinces[nom];
        html += "</td>";
        html += "</tr>";
    }
   
   
    html += "</table>";
    html += "</html>";

    console.log(provinces);

    response.writeHead(200, {"Content-Type": "text/html; charset = UTF-8"});
    response.write(html); 
    response.end(); 

}).listen(8888);