// 10.1 Express Basics - 2. Hello world 만들기
// npm insatll express
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));