let randomNumber = (Math.floor(Math.random()))
let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
//generating number between 1 and 100 
let x = Math.floor((Math.random() * 100) + 1)
let ball = document.getElementById('ball')
let berry = document.getElementById('berry')
let goNear = document.getElementById('go-near')
let runAway = document.getElementById('run-away')
console.log(x)

let addDecimal = (num) => {
  return (num / 10).toFixed(1)
}

// the one mcss function to rule them all (conveniently initializes everything so components work)
M.AutoInit()

document.getElementById('start-button').addEventListener('click', event => {
  event.preventDefault()
  let pokemonNum = (Math.floor(Math.random() * 151) + 1)
  console.log(pokemonNum)
  document.getElementById('pokemonImg').innerHTML = ''

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      let pokemon = res.data
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
        let pokeList = document.getElementById('pokeList')

        let caughtPokemonArr = JSON.parse(localStorage.getItem('caughtPokemonArr')) || []
        // grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array
        

        

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
    
});
  // .catch (err => console.log(err))



// document.getElementById('ball').addEventListener('click', event =>{
//   event.preventDefault();
//   let catchPokemon = Math.floor(Math.random() * 1)
//   console.log(catchPokemon)
//    if (catchPokemon == 0) {
//      document.getElementById('modal2').addEventListener("click", event => {

//      })
//    }
// });








// function addToLocalStorage(alreadyCaughtPokemon, newlyCaughtPokemon) {
//   //construct pokemon object.
//   var pokedexObj = {
//     name: alreadyCaughtPokemon,
//     score: newlyCaughtPokemon,
//   };
//   // add new poke to array
//   caughtPokemon.push(pokedexObj);
//   // stringify the <array></array>
//   var caughtPokemonToString = JSON.stringify(caughtPokemon);
//   localStorage.setItem('caughtPokemonArr', caughtPokemonToString);
// }
// {/* <span class="card-title">Card Title</span>
//               <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}



// function addToLocalStorage(alreadyCaughtPokemon, newlyCaughtPokemon) {

//   event.preventDefault

//   // add new poke to array
//   caughtPokemon.push(pokedexObj)

//   // stringify the <array></array>
//   var caughtPokemonToString = JSON.stringify(caughtPokemon)

//   localStorage.setItem('caughtPokemonArr', caughtPokemonToString)
// }




// function addToLocalStorage(alreadyCaughtPokemon, newlyCaughtPokemon) {

//   event.preventDefault
  
//   // add new poke to array
//   caughtPokemon.push(pokedexObj)

//   // stringify the <array></array>
//   var caughtPokemonToString = JSON.stringify(caughtPokemon)
  
//   localStorage.setItem('caughtPokemonArr', caughtPokemonToString)
// }


