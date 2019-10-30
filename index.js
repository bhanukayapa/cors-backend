'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({credentials: true, origin: 'http://client1.local.com:4200'}));
app.use(express.json());

let port = process.env.PORT || 4200;
let host = 'client2.local.com';

app.listen(port, host, function(){
    console.log('App is listening on ' + host +':' +port);
});

app.get('/api/cookie',function (req, res) {
    //res.setHeader('Set-Cookie','cdn-token=exp3header1; domain=.local.com; path=/;');
    res.setHeader('Set-Cookie','cdn-token=exp3header_same-site-none; domain=.local.com; path=/; SameSite=None;');
    //res.setHeader('Set-Cookie','cdn-token=exp3header_same-site-none-secure; domain=.local.com; path=/; SameSite=None; Secure;');
    res.json({status:'cooked!'});
});

app.get('/api/get',function (req, res) {
    res.json({status:'success'});
});
