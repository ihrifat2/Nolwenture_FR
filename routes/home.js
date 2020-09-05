const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', (req, res, next) => {
    res.render('home', { title: 'File Reader', datas: '' })
})

router.post('/readfile', (req, res, next) => {
    fs.readFile('./files/binary.dat', 'utf-8', function (err, data) {
        const buf = Buffer.from(data)
        bufString = buf.toString()
        res.render('home', { title: 'File Reader', datas: bufString })
    })
})

module.exports = router;