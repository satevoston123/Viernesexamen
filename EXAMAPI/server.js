const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//THIS IS A POST ENDPOINT
app.post('/api/myPostEndpoint', function (req, res) {

    //THIS ENDPOINT WAIT FOR SOMETHING FROM THE BODY OF THE REQUEST
    //I STORED THE DATA INSIDE THE BODY IN THIS VARIABLE
    let bodyOfTheRequest = req.body;

    //AT MY ANGULAR APP I SENT TWO PROPERTIES "FIRSTNAME AND LAST NAME" 
    //THOSE PROPERTIES COME INSIDE A JSON OBJECT FROM ANGULAR
    /*      let dataToSend ={
            "firstname":"Roberto",
            "lastname":"Aguirre"
          } */
    //I AM GOING TO RECEIVE THEM  HERE TO RECEIVE THE FULL NAME


    let fullName = `The full name is ${bodyOfTheRequest.firstname} ${bodyOfTheRequest.lastname}`

    //THEN I JUST SEND THE RESPONSE
    res.send({
        "status": "OK",
        "message": fullName
    }

    );


})




//THIS IS A GET ENDPOINT
app.get('/api/myGetEndpoint', function (req, res) {

    res.send({
        "status": "OK",
        "message": 'Greetings'
    })

})


app.listen(port, function () {
    console.log(`RESTFUL API LISTENING AT THE PORT ${port} `);
})