const http = require('http');
const obj = require("./GettingOS");
const dos= require("./DosDetector");
const dd = new dos.module(12222);

const server = http.createServer((req, res) => {
    if (req.url === '/api/os-info') {
        res.setHeader('Content-Type', 'application/json');
        res.write("platform: "+ obj.module.platform);
        res.write("\nType: "+obj.module.osType)
        res.write("\nTotal memory: "+obj.module.totalMem)
        res.write("\nMemory Free: "+obj.module.memFree)
        res.write("\nEOL "+obj.module.EOL);

        return res.end();
    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
        return res.end();
    }
});
server.on('connection', (sock) => {
console.log("Server is up")
dd.addUrl(sock.remoteAddress);
console.log(dd.urls);
console.log(sock.remoteAddress);

});

server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.