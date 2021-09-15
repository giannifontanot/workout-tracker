const router = require('express').Router();
const path = require('path');
const root = require('app-root-path');

router.get('/exercise',(req, res)=>{
    res.sendFile(path.join(root.path,'/public', '/exercise.html'));
});

router.get('/stats',(req, res)=>{
    res.sendFile(path.join(root.path,'/public', '/stats.html'));
});

router.get('/',(req, res)=>{
    res.sendFile(path.join(root.path,'/public', '/index.html'));
});


module.exports = router;