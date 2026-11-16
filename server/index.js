const http = require("http");
const fs = require("fs");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
    console.log("요청 발생");
    console.log(req.method);
    //res.setHeader("Content-Type", "text/plain");
    //res.write("Hello, Node!!");
    //res.end();
    res.setHeader("Content-Type", "text/html");
    const readStream = fs.createReadStream(__dirname+"/index.html", "utf8");
    readStream.pipe(res);
});

server.listen(PORT, () => {
    console.log("3000번 포트에서 서버 실행 중");
});