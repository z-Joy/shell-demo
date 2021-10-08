const http = require('http');
const { execFile } = require('child_process')

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/install') {
    execFile('./install.sh', (err, studot) => {
      console.log(studot);
    })
  }
  res.end('hello, world');
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
})