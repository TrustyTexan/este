import compression from 'compression';
import config from './config';
import express from 'express';
import path from 'path';

export default function () {

  let app = express();

  app.use(compression());
  app.use('/', express.static(path.join(__dirname, '/../../')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../../'));
  });

  app.listen(config.port);

  console.log(`App started on port ${config.port}`);

}