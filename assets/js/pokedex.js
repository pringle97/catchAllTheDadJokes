let pokeList = document.getElementById('pokeList')

// grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array
let caughtPokemonArr = JSON.parse(localStorage.getItem('caughtPokemonArr')) || []

M.AutoInit()

caughtPokemonArr.forEach((pokemon, i) => {
  let listElem = document.createElement('a')
  listElem.setAttribute("href", "#!")
  listElem.className = 'collection-item'
  listElem.innerHTML = `
  ${pokemon}
  `
  pokeList.append(listElem)
})
  // <a class="btn-flat">
  // <a a class="btn-flat delete right" data - index="${i}" > <i class="material-icons">cancel</i></a >
// pokeCollection = document.querySelectorAll('.collection-item');

// pokeCollection.forEach(item => {
//   item.addEventListener('click', event => {
//     let valueCheck = event.target.firstChild.textContent
//     let buttonElem = event.target.id
//     console.log(buttonElem)
//     console.log(valueCheck)
//     console.log(event.target)
//   })
// })

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



