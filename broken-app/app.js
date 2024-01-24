const express = require('express');
let axios = require('axios');
let expressError = require('./expressError')

const app = express();

app.use(express.json());

const api = `https://api.github.com/users/`

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async dev => {
      return await axios.get(`${api}/${dev}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.use(function(req, res, next) {
  const err = new ExpressError('Not Found', 404);
  return next(err);
});


app.use(function(err, req, res, next) {
  
  let status = err.status || 500;
  let message = err.message;

  
  return res.status(status).json({
    error: {message, status}
  });
});


app.listen(3000, function(){
  console.log('Server running on port 3000');
})

