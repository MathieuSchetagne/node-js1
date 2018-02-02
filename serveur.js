
const http = require("http");
http.createServer((request,response) => 
{
    console.log('branchement sur le port 8888')
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World"); 
    response.end(); 

    fs.readFile('provinces.JSON', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
       });

    console.log(obj);

}).listen(8888);