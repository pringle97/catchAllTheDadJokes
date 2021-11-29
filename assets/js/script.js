
// const pokemonArr = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggtor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]

let randomNumber = (Math.floor(Math.random()))

//generating number between 1 and 100 
let x = Math.floor((Math.random() * 100) +1)
let ball = document.getElementById('ball')
let berry = document.getElementById('berry')
let goNear = document.getElementById('go-near')
let runAway = document.getElementById('run-away')
console.log(x)
let caughtPokemon = JSON.parse(localStorage.getItem('caughtPokemonArr')) || [];

// function catchPokemon() {
//   document.getElementById('ball').addEventListener('click', event => {
//     event.preventDefault
//     //need to make variables for pokemon name or caught pokemon in the placeholder
//     console.log(`pokemon: ${placeholder.value}`);
//     addToLocalStorage(placeholder.value);
//     placeholder.value = '';
//     if (x <= 50) {
//     }
//   })
// }

//catching pokemon
//reset function that takes you to next poke or main page
//click event to release poke using reset function
//click event if poke runs away using reset function
//if you catch, take player to pokedex
//local storage saves poke and we will pull from storage to display 



let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

let addDecimal = (num) => {
  return (num / 10).toFixed(1)
}

let pokemonNum = (Math.floor(Math.random() * 151) + 1)
// the one mcss function to rule them all (conveniently initializes everything so components work)
M.AutoInit()

let pokeList = document.getElementById('pokeList')

let caughtPokemonArr = JSON.parse(localStorage.getItem('caughtPokemonArr')) || []
// grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array

caughtPokemonArr.forEach((pokemon, i) => {
  let listElem = document.createElement('ul')
  listElem.className = 'collection-item waves-effect z-depth-1'
  listElem.innerHTML = `
    <a class="btn-flat"><h6>${pokemon}</h6></a>
    <a class="btn-flat delete right" data-index="${i}"><i class="material-icons">cancel</i></a></a>
    `
  document.getElementById('pokeList').append(listElem)
})


document.getElementById('start-button').addEventListener('click', event => {
  event.preventDefault()
  let pokemonNum = (Math.floor(Math.random() * 151) + 1)
  console.log(pokemonNum)
  document.getElementById('pokemonImg').innerHTML = ''

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      const pokemon = res.data
      console.log(pokemon)
      let svg = pokemon.sprites.other.dream_world.front_default

      if (pokemon.types[1]) {
        document.getElementById('cardContent').classList.remove('hide')
        document.getElementById('pokemonImg').innerHTML = `
        <img src="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        document.getElementById('cardContent').innerHTML = `
        <h2><strong>${capitalize(pokemon.species.name)}</strong></h2>
        <h5>Type: ${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}</h5>
        <h5>Height: ${addDecimal(pokemon.height)} m</h5>
        <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
        `
      } else {
        console.log(pokemon)
        console.log(pokemon.types[0].type.name)
        document.getElementById('cardContent').classList.remove('hide')
        document.getElementById('pokemonImg').innerHTML = `
        <img src ="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        document.getElementById('cardContent').innerHTML = `
        <h2><strong>${capitalize(pokemon.species.name)}</strong></h2>
        <h5>Type: ${capitalize(pokemon.types[0].type.name)}</h5>
        <h5>Height: ${addDecimal(pokemon.height)} m</h5>
        <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
        `;

        `
      }
    })
  // .catch (err => console.log(err))
  document.getElementById('ball').addEventListener('click', event => {

    event.preventDefault()

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
      .then(res => {

        const pokemon = res.data
        console.log(pokemon)
        let pokemonName = pokemon.name
        console.log(pokemonName)
        

        

        console.log(caughtPokemonArr, `caughtPokemonArr, AKA our array that we pulled from localStorage. This should console log as an empty array on the first try since we didn't push anything into it yet.`)
        // check caughtPokemonArr value in console

        let catchPokemon = Math.floor(Math.random() * 1)
        console.log(catchPokemon)

        caughtPokemonArr.push(pokemonName)
        console.log(pokemonName, 'caughtPokemonArr after we pushed stuff')

        localStorage.setItem('caughtPokemonArr', JSON.stringify(caughtPokemonArr))

        // caughtPokemonArr.forEach((caughtPokemonArr, i) => {
        //   let listElem = document.createElement('li')
        //   listElem.className = 'collection-item'
        //   listElem.innerHTML = `
        //   <h5>${pokemonName}</h5>      
        //   <button class="btn btn-danger delete" data-index="${i}">X</button>
        //   `
        //   document.getElementById('pokeList').append(listElem)
        // })

        // document.addEventListener('click', event => {
        //   if (event.target.id === 'saveRandom') {
        //     quotes.push(quote)
        //     renderQuotes()
        //     localStorage.setItem('quotes', JSON.stringify(quotes))
        //     document.getElementById('showRandom').innerHTML = ''
        //   }
        // })

        

        // if (catchPokemon == 0) {
        //   for (let i = 0; i < caughtPokemonArr.length; i++) {

        //     pokeList.innerHTML += `
        //     <li> ${caughtPokemonArr[i]} </li>
        //     `
        //   }
        //   alert("you've caught a pokemon!")

      

        // console.log(`Name: ${userName}`)
        // addToLocalStorage(userName.value)
        // userName.value = ''
      })
    
  })
})

document.getElementById('ball').addEventListener('click', event => {
  event.preventDefault();
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      const pokemon = res.data
      // let pokemonNum = (Math.floor(Math.random() * 151) + 1)
      let catchPokemon = Math.floor(Math.random() * 1)
      console.log(catchPokemon)
      if (catchPokemon == 0) {
        alert("you've caught a pokemon!")
      }
      console.log(`Name: ${pokemon.species.name}`);
      addToLocalStorage(pokemon.species.name);
      pokemon.species.name = '';
    });
})

// function addToLocalStorage(alreadyCaughtPokemon, newlyCaughtPokemon) {

//   event.preventDefault
  
//   // add new poke to array
//   caughtPokemon.push(pokedexObj)

//   // stringify the <array></array>
//   var caughtPokemonToString = JSON.stringify(caughtPokemon)
  
//   localStorage.setItem('caughtPokemonArr', caughtPokemonToString)
// }


