document.getElementById(`random`).addEventListener('click', event => {
  event.preventDefault()

let randomNumber = Math.floor(Math.random() * 2)
console.log(randomNumber)

if (randomNumber === 0 ) {

  
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

} else {
    axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`)
      .then(res => {
        console.log(res)
        joke = res.data.joke

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





