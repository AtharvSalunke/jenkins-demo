const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request received at: ${new Date().toISOString()}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("🚀 Jenkins CI/CD is working perfectly!\n");
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});