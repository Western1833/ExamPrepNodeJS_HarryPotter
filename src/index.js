const express = require('express');
const configFile = require('./constants.js');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./router.js');
const cookieParser = require('cookie-parser');

const app = express();

//Express configurations/middlewares
app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//Handlebars configuration
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', "hbs");
app.set('views', 'src/views');

//DB connection
async function dbConnect(){
    await mongoose.connect(configFile.DB_URL);
}

dbConnect()
.then(() => {
    console.log('Successfully connected to database.')
})
.catch(err => console.log(`Error while connectig to database: ${err}`));

//Routing
app.use(router);

app.listen(configFile.PORT, () => console.log(`Server is listening on Port: ${configFile.PORT}...`));