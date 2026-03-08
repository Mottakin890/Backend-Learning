import http, {Server, IncomingMessage, ServerResponse} from 'http';

const hostname:string = '127.0.0.1';
const port:number = 8080;

let server: Server = http.createServer((req: IncomingMessage, res: ServerResponse)=>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end(`<h3>Welcome to my first node server<h3/>`)
})

server.listen(port, hostname, ()=>{
    console.log(`Server started at http://${hostname}:${port}`)
});