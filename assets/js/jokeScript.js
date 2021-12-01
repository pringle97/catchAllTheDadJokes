let pokeList = document.getElementById('pokeList')
let addDecimal = (num) => {return (num / 10).toFixed(1)}
let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
// grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array
let caughtPokemonArr = JSON.parse(localStorage.getItem('caughtPokemonArr')) || []
// let pokemonName = caughtPokemonArr[]
// console.log(pokemonName)
M.AutoInit()



caughtPokemonArr.forEach((pokemon, i) => {
  let listElem = document.createElement('ul')
  listElem.className = 'collection-item waves-effect z-depth-1'

  listElem.innerHTML = `
  <a class="btn-flat"><h6>${pokemon}</h6></a>
  <a class="btn-flat delete right" data-index="${i}"><i class="material-icons">cancel</i></a></a>
  `
  document.getElementById('pokeList').append(listElem)
})
console.log(caughtPokemonArr)

let pokeCollection = document.querySelectorAll('.collection-item');
console.log(pokeCollection)
pokeCollection.forEach(item => {
  item.addEventListener('click', event => {
    let valueCheck = event.target.firstChild.textContent
    let buttonElem = event.target.id
    console.log(buttonElem)
    console.log(valueCheck)
    console.log(event.target)
  

  event.preventDefault()

  axios.get(`https://pokeapi.co/api/v2/pokemon/${valueCheck}`)
    .then(res => {

      let pokemon = res.data
      console.log(valueCheck)
      let svg = pokemon.sprites.other.dream_world.front_default
      
      document.getElementById('main-screen').innerHTML = `
        <img class='sprites' src="${svg}" alt="${pokemon.species.name}">
        `
      document.getElementById('name-screen').innerHTML = `${capitalize(pokemon.species.name)}
      `
      document.getElementById(`about-screen`).innerHTML = `Height: ${addDecimal(pokemon.height)}m
        Weight: ${addDecimal(pokemon.weight)}kg
        `
      document.getElementById(`type-screen`).innerHTML = `Type: ${capitalize(pokemon.types[0].type.name)}`
    })
  })
})











//Joke section
document.getElementById('random').addEventListener('click', event => {
  event.preventDefault()

  let randomNumber = Math.floor(Math.random() * 3)
  console.log(randomNumber)
  const quoteElem = document.getElementById('quote')
  const setupElem = document.getElementById('setup')
  const jokeElem = document.getElementById('joke')
  let i = 0
  let speed = 10
  
  
  if (randomNumber === 0 ) {
    
    axios.get(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes`)
    .then(res => {
      console.log(res)
        
        let punchline = res.data.punchline
        let setup = res.data.setup
        let words = `${setup} - ${punchline}`
        
        setupElem.innerHTML = ''
        quoteElem.innerHTML = ''
        jokeElem.innerHTML = ''
      
        function typeWriter() {
          if (i < words.length) {
            document.getElementById("setup").innerHTML += words.charAt(i)
            i++
            setTimeout(typeWriter, speed)
          }
        }

        typeWriter()
       
    })
  // .catch(err => console.log(err));

  } else if (randomNumber === 1) {
    // axios get for other joke
    axios.get(`https://goquotes-api.herokuapp.com/api/v1/random?count=1`)
      .then(res => {
        console.log(res)
        let quote = res.data.quotes[0].text     

        quoteElem.innerHTML = ''
        setupElem.innerHTML = ''
        jokeElem.innerHTML = ''

        console.log(quote)

        function typeWriter2() {
          if (i < quote.length) {
            document.getElementById("quote").innerHTML += quote.charAt(i)
            i++
            setTimeout(typeWriter2, speed)
          }
        }

        typeWriter2()

      })
      .catch(err => console.log(err))
  } else {
    axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`)
      .then(res => {
        console.log(res)
        let joke = res.data.joke
      
        quoteElem.innerHTML = ''
        setupElem.innerHTML = ''
        jokeElem.innerHTML = ''

        function typeWriter3() {
          if (i < joke.length) {
            document.getElementById("quote").innerHTML += joke.charAt(i)
            i++
            setTimeout(typeWriter3, speed)
          }
        }
        
        typeWriter3()
         
      })
      .catch(err => console.log(err))
  }

})



