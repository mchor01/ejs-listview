const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

app.set('view engine', 'ejs')
//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = "My Home Page";
  var heading = "List View Assignment";
  res.render('pages/index',{ 
    'title':title,
    'heading':heading
  })

})
app.get('/about', (req, res) => {
  var title = "My About Page";
  var heading = "List View Assignment";

  res.render('pages/about',{ 
    'title':title,
    'heading':heading
  })
})
  app.get('/users', (req, res) => {
  var title = "Our Users";
  var heading = "List View Assignment";
  res.render('users/index',{ 
    'title':title,
    'heading':heading,
    'users': data
  })
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data)
})