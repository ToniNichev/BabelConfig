import url from 'url';
import path  from 'path';
import express from 'express';
import test from './test';




test('Babel is runninng!');

const app = express();

app.get('*', function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var html = '';
  if( url_parts.pathname.indexOf('.js') != -1 || url_parts.pathname.indexOf('.json') != -1)  {
    // serve static files
    res.sendFile(path.join(__dirname, 'static', url_parts.pathname));
  }
  else {
    // or serve index.html
    res.sendFile(path.join(__dirname, '../static', 'index.html'));
  }
});

app.listen(8080, function (req, res) {
  console.log('App is listening on port: 8080\n');
});