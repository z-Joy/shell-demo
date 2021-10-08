const http = require('http');
const { execFile } = require('child_process');
const cwd = process.cwd();

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
  if (req.url === '/install') {
    console.log(111);
    execFile(cwd + './install.sh', (err, studot) => {
      console.log(err, studot);
    })
  }
  res.end('hello, world');
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
})