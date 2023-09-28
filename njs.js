// 9.1 Node.js Basics - 5. Node.js 맛보기: HTTP Serer
const http = require('http');

http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');


// 9.4 Node.js file upload example
// 이 포스트는 http://www.nodebeginner.org 를 바탕으로 작성되었다. 한국어 번역도 있으니 참조 바란다. 소스코드는 이곳(https://github.com/manuelkiessling/nodebeginner.org/tree/master/code/application) 에서 다운 받을 수 있다.