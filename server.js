const express = require('express')
const app = express()
const dataBase = require ('./dataBase')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true }))

app.get ('/pokemons', (req, res) => {
    res.send(dataBase.mostrarpokemons())})

    app.get ('/pokemons/:id', (req, res) => {
    res.send(dataBase.mostrarpokemons(req.params.id))})

    app.post ('/pokemons', (req, res) => {
    const pokemon = dataBase.salvarpokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,

    })
    res.send(pokemon)

 })

 app.put ('/pokemons/', (req, res) => {
    const pokemon = database.atualizarpokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)

    })  


    res.send(pokemon)

})

app.delete ('/pokemons/:id', (req, res) => {
    res.send(database.deletarpokemon(req.params.id))
    })  

    app.post ('/batalha', (req, res) =>{
        res.send(dataBase.batalhapokemon(req.body.id1, req.body.id2))
    })
    
    app.put ('/heal/', (req, res) => {
        res.send(dataBase.pokemonheal(req.body.id))
    
        })  
    


app.listen(3003)