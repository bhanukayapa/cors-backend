'use strict';

const https = require('https');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:8500'}));
app.use(express.json());


var port = process.env.PORT || 8080;
//var host = 'client2.local.com';

app.listen(port, function(){
    console.log('App is listening on ' + port);
});

app.get('/api/cookie',function (req, res) {
    res.setHeader('Set-Cookie','cdn-token=exp=3-header; domain=.heroku.com; path=/; SameSite=none; Secure;');
    res.json({status:'cooked!'});
});

app.get('/api/get',function (req, res) {
    res.json({status:'success'});
});