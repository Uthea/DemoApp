function requireHTTPS(req, res, next) {
  if(!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const express = require('express');
const app = express();

app.use(requireHTTPS); // comment if local
app.use(express.static('./dist/ToDoApp'))

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root : 'dist/ToDOApp'})
)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Payment app listening at http://localhost:${port}`)
})
