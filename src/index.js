const express = require('express');
const configFile = require('./constants.js');
const handlebars = require('express-handlebars');
const path = require('path');
const router = require('./router.js');

const app = express();

//Express configurations/middlewares
app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.urlencoded({extended: false}));

//Handlebars configuration
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', "hbs");
app.set('views', 'src/views');

//Paths
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.listen(configFile.PORT, () => console.log(`Server is listening on Port: ${configFile.PORT}...`));