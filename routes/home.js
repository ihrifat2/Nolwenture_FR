const express = require('express');
const router = express.Router();
const fs = require('fs')
// const { exec, spawn } = require('child_process');

// router.get('/', (req, res, next) => {
//     res.send('Express router is working')
// })


router.get('/', (req, res, next) => {
    res.render('home')
})

router.post('/readfile', (req, res, next) => {
    // res.send('readfile route is working')
    // fs.readFile('../files/binary', 'latin1', function(err, data){
    //     console.log(data)
    // });
    binary = fs.readFileSync('../files/binary.dat');
    console.log(binary)

    // exec('binary.bat', (err, stdout, stderr) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log(stdout);
    // });
})

module.exports = router;