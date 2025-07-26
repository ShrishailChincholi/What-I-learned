let http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("welcome Nod.js app")
    res.end()
}).listen(8080)