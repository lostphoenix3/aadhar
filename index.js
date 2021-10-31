const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')
var data;
app = express();

const port = 5000;

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',async(req, res) => {
    const rest = await axios.post("https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha",{
        "langCode": "en",
        "captchaLength": "3",
        "captchaType": "2"
       })
       res.locals.rest= rest.data
       data = rest.data
       res.render("home")
});

app.get('/otp',(req, res) => {
    
});


app.listen(port);