/**
 * if you wanna renew certificate for local host please run generate.sh by use ./generate.sh in folder cer
 * if you need to add some local domain please change DS record in domains.ext
 */




const { createServer } = require('https');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev:dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: readFileSync('./cer/localhost.key'),
  cert: readFileSync('./cer/localhost.crt')
};

app.prepare()
  .then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${port}`);
    })
  });