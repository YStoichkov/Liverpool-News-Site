const router = require('express').Router();
const Player = require('../models/Player.js');
const playerService = require('../services/playerService.js')

router.post('/add', async (req, res) => {
    try {
        let { firstName, lastName, position, shirtNumber, dateOfBirth, goals, apperances, playerImage, description, userId } = req.body;
        let player = {
            firstName,
            lastName,
            position,
            shirtNumber,
            dateOfBirth,
            apperances,
            goals,
            playerImage,
            description,
            addedByUser: userId
        }
        await playerService.create({ ...player });
        res.status(200).json('ok');
    } catch (err) {
        res.status(404).json('error');
    }
})

router.get('/all', async (req, res) => {
    try {
        let result = await playerService.getAll();
        res.send(result);
    } catch (error) {
        res.status(404).json('error');
    }
})

router.get('/details/:playerId', async (req, res) => {
    try {
        let playerId = req.params.playerId;
        let player = await playerService.getOne(playerId);
        res.send(player);
    } catch (error) {
        res.status(404).json('error');
    }
})

router.post('/edit/:playerId', async (req, res) => {
    try {
        let { firstName, lastName, position, shirtNumber, dateOfBirth, apperances, goals, playerImage, description } = req.body;
        let playerId = req.params.playerId;
        await playerService.updateOne(playerId, { firstName, lastName, position, shirtNumber, dateOfBirth, apperances, goals, playerImage, description });
        res.status(200).json('ok');
    } catch (error) {
        res.status(404).json('error');
    }
})

router.post('/delete/:playerId', async (req, res) => {
    try {
        let { playerId, userId } = req.body.playerId;
        await playerService.deleteOne(playerId);
        res.json('OK');
    } catch (error) {
        res.status(404).json('error');
    }
})
module.exports = router;