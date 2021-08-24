const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const pokemons = []

function salvarpokemons(pokemon) {
   if(!pokemon.id) pokemon.id = sequence.id
   pokemons[pokemon.id] = pokemon
   return pokemon 
}

function mostrarpokemon(id) {
    return pokemons[id] || {}
}

function mostrarpokemons() {
    return Object.values(pokemons)

}

function atualizarpokemon(id, pokemon) {
    pokemons[id] = pokemon
    return pokemon

}

function deletarpokemon(id) {
    sequence._id = sequence._id - 1
    const pokemondeletado = pokemon[id]
    pokemons.splice(id, 1)
    pokemons.forEach(pokemon => {
        if(pokemon.id > id)
            pokemon.id = pokemon.id - 1
    })
    return pokemondeletado
}

function batalhapokemon(id1, id2) {
    const superEfetivo = 40
    const Efetivo = 20
    const naoEfetivo = 10 

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon1.tipo == pokemon2.fraqueza) {
            pokemon2.hp = pokemon2.hp - superEfetivo
        } else if (pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp = pokemon2.hp - naoEfetivo
        } else {
            pokemon2.hp = pokemon2.hp - Efetivo

        }
    }
    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon2.tipo == pokemon1.fraqueza) {
            pokemon1.hp = pokemon1.hp - superEfetivo
        } else if (pokemon1.tipo == pokemon2.resistencia){
            pokemon1.hp = pokemon1.hp - naoEfetivo
        } else {
            pokemon1.hp = pokemon1.hp - Efetivo

        }
    }
    if(pokemon1.hp <0) pokemon1.hp =0
    if(pokemon2.hp <0) pokemon1.hp =0

    return `${pokemon1.nome}: ${pokemon1.hp} / ${pokemon2.nome}: ${pokemon2.hp}`

}

function pokemonheal(id) {
    pokemon = pokemons [id]
    pokemon.hp +=20
    if (pokemon.hp>100) pokemon.hp = 100
    return `${pokemon.nome} heal ${pokemon.hp} hp`
}


module.exports = {salvarpokemons, mostrarpokemon, mostrarpokemons, atualizarpokemon, deletarpokemon, batalhapokemon, pokemonheal }