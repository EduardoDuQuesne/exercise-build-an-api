const express = require('express');
const app = express();
//routes has only a folder and slash after it, will default to index
const routes = require('./routes/');
require('dotenv').config();



////////// MIDDLEWARE STACK ///////////
// First argument is the inital path before routes, ex: different versions of API
app.use("/api/v1/", routes);



// Port and Listen //
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});













//TODO ADD ERROR HANDLER