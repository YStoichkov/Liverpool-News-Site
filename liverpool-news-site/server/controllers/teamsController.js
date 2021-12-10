const router = require('express').Router();
const Team = require('../models/Team.js');

router.post('/add', async (req, res) => {
    let { team, played, wins, draws, loses, goalsScored, goalsAgainst, difference, points } = req.body;
    let teamToAdd = {
        teamName: team,
        played,
        wins,
        draws,
        loses,
        goalsScored,
        goalsAgainst,
        difference,
        points
    }
    Team.create(teamToAdd)
    res.json({ message: 'OK', statusCode: 200 })
})


router.get('/all', async (req, res) => {
    try {
        let result = await Team.find({}).sort({ position: 1 }).lean();
        res.send(result);
    } catch (error) {
        res.status(404).json('error');
    }
})

router.post('/edit/:teamId', async (req, res) => {
    let teamId = req.params.teamId;
    let teamData = req.body;
    await Team.findByIdAndUpdate(teamId, teamData, { runValidators: true })
    let teams = await Team.find({}).sort({ position: 1 }).lean();
    res.send(teams);
})


module.exports = router;