const express = require('express'); //setup express library from package.json dependencies to create a new app

const app = express();  //setup new express app

//setup a single route handler
app.get('/', (req, res) => {    // => function arrow
    res.send('HOLA LETs BUY AN APARTMENT');
});

//Everytime someone visits our homepage, we will send the response "Hi there"

app.listen(8080, () =>{
    console.log('Listening on port 8080');
});