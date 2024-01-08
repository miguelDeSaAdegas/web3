const router = require('express').Router()
const jokes = require('../models/jokes')

router.get("/", (req, res, next) => {
    jokes.find({})
    .then(jokes => {
        return res.json(jokes)
    })
    .catch(err => next(err))
})

router.get("/:id", (req, res, next) => {
    const idRep = req.params.id

    jokes.findById(idRep)
    .then(joke => {
        if (joke === null) return res.status(404).json("bad request")
        return res.json(joke)
    })
    .catch(err => next(err))
})

router.delete("/:id", (req, res, next) => {
    const idRep = req.params.id

    jokes.findOneAndDelete({id: idRep})
    .then(joke => {
        if (joke === null) res.status(404).json("bad request")
        return res.json(joke)
    })
    .catch(err => next(err))
})

router.post("/", (req, res, next) => {
    const joke = req.body

    if (joke.question.length < 3 || joke.answer.length < 3 || joke.category.length < 3) res.status(420).json("bad length")

    const newJoke = new jokes(joke)

    newJoke.save()
    .then(saveJoke => {
        return res.json(saveJoke);
    })
    .catch(err => next(err))
})

module.exports = router