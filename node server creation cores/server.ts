import http, { Server, IncomingMessage, ServerResponse } from 'http';
import os from 'os';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname: string = '127.0.0.1';
const port: number = 8080;

let server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // fs.readFile(path.join(__dirname, 'data', 'mottakin.txt'), 'utf-8', (err, fileData: string) => {
    //     if (err) {
    //         console.error('File read error:', err);
    //     }

    //     const osData = {
    //         memory: os.totalmem(),
    //         home: os.homedir(),
    //         hostname: os.hostname(),
    //         fileContent: err ? null : fileData,
    //         error: err ? err.message : null
    //     };

    //     fs.writeFile(path.join(__dirname, 'data', 'data.txt'), fileData, 'utf-8', () => {
    //         if (err) {
    //             console.error('File read error:', err);
    //         }
    //         const osData = {
    //             memory: os.totalmem(),
    //             home: os.homedir(),
    //             hostname: os.hostname(),
    //             fileContent: err ? null : fileData,
    //             error: err ? err.message : null
    //         };
    //     });



    //     res.end(JSON.stringify(osData, null, 2));
    // });


    fs.readFile(path.join(__dirname, "data", "demo.json"), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});