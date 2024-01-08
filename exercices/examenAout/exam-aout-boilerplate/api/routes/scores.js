const router = require('express').Router()
const scores = require('../models/scores')
const jokes = require('../models/jokes')

router.get("/", async (req, res, next) => {

    const rep = await scores.find({})
    .then(score => {
        if (rep === null) res.status(404).json("bad request")
        return res.json(score)
    })
    .catch(err => next(err))
})

router.post("/", (req, res) => {
    const score = req.body

    const errorMessage = []
    if (jokes.findOne({id: score.joke}) === null) errorMessage.push("joke doesn't exist")
    if (score.findOne({joke: score.joke, username: score.usenrame}) !== null) errorMessage.push("user already has a score")
    if (score.username.length < 3) errorMessage.push("bad length")
    if (errorMessage.length > 0)res.status(422).json({errorMessage})

    const newScore = new scores(score)

    newScore.save()
    .then(saveScore => {
        return res.json(saveScore)
    })
    .catch(err => next(err))
    
})

module.exports = router