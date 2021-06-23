console.log('[INFO]: Starting Webserver!');

const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000; //default WebPort
<<<<<<< HEAD
    
=======

>>>>>>> 75c31a376bccb347dd959b542eeb04328fa53f57
app.use(express.static('public-root/webserver-root'), express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log("[INFO]: Done!");
    console.log(`[INFO]: Server is running on port ${port} (http://localhost:${port}/ )`);
})

/********************************* GETS ****************************************/

app.get('/API/ping', (req, res) => {
    res.send('pong');
});

app.get('/API/version', (req, res) => {
    res.send('Version: Alpha 1.0');
});

app.post('/API/test', (req, res) => {
	console.log('got data!');
	res.send({"response":"UwU"});
});

/******************************** 404 *****************************************/

app.use((req, res, next) => {//404 page Error (https://expressjs.com/en/starter/faq.html)
    res.status(404).send(fs.readFileSync('./public-root/webserver-root/404.html', 'utf8'));
});

