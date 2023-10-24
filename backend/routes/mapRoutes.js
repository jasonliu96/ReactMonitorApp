const express = require('express');

const router = express.Router();
const mapServices = require('../services/mapServices');

router.get('/', async(req, res) => {
    res.json({ message: "You've Landed", status:200});
})


router.get('/getMap', async(req, res) => {
    try{
        res.json(await mapServices.buildMap());
    } catch (err) {
        console.log(err);
    }
})

router.get('/getPodMap', async(req, res)=> {
    try{
        res.json(await mapServices.buildPodMap());
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;