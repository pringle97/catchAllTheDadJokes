
// Grab ID and add Click listener
document.getElementById(`random`).addEventListener('click', event => {
  event.preventDefault()

// choose random number between 2 to choose joke
let randomNumber = Math.floor(Math.random() * 3)
console.log(randomNumber)

if (randomNumber === 0 ) {

  // axios get for dad joke
  axios.get(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes`)
  .then(res => {
    console.log(res)
    let punchLine = res.data.punchline
    let setup = res.data.setup
    document.getElementById('quote').innerHTML = ''
    
    const randomQuoteElem = document.createElement(`div`)
    randomQuoteElem.innerHTML = 
    `<div>
    <h1> ${setup}</h1>
    <h2>${punchLine}</h2>
    </div
    `
    
    document.getElementById('quote').append(randomQuoteElem)
  
    
  })
  .catch(err => console.log(err))

} else if (randomNumber === 1) {
  // axios get for other joke
  axios.get(`https://goquotes-api.herokuapp.com/api/v1/random?count=1`)
    .then(res => {
      console.log(res)
      let quote = res.data.quotes[0].text

      document.getElementById('quote').innerHTML = ''

      const randomQuoteElem = document.createElement(`div`)
      randomQuoteElem.innerHTML =
        `<div>
          <h1>${quote}</h1>
          </div
          `

      document.getElementById('quote').append(randomQuoteElem)


    })
    .catch(err => console.log(err))
} else {
  // axios get for other joke
    axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`)
      .then(res => {
        console.log(res)
        let joke = res.data.joke

        document.getElementById('quote').innerHTML = ''

        const randomQuoteElem = document.createElement(`div`)
        randomQuoteElem.innerHTML =
          `<div>
          <h1>${joke}</h1>
          </div
          `

        document.getElementById('quote').append(randomQuoteElem)


      })
      .catch(err => console.log(err))
    }

})




