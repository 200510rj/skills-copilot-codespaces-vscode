// Creat web server to handle comments
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/comments' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Received comment:', body);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Comment received');
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});