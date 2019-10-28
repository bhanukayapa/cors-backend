'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({credentials: true, origin: 'http://client1.local.com'}));
app.use(express.json());

let port = process.env.PORT || 8080;
let host = 'client2.local.com';

app.listen(port, host, function(){
    console.log('App is listening on ' + port);
});

app.get('/api/cookie',function (req, res) {
    //res.setHeader('Set-Cookie','cdn-token=exp3header3; path=/; SameSite=None; Secure;');
    res.setHeader('Set-Cookie','cdn-token=exp3header4; domain=.local.com; path=/; SameSite=None; Secure;');
    res.json({status:'cooked!'});
});

app.get('/api/get',function (req, res) {
    res.json({status:'success'});
});
