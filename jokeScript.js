document.getElementById(`random`).addEventListener('click', event => {
  event.preventDefault()
axios.get(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes`)
  .then(res => {
    console.log(res)
    let punchLine = res.data.punchline
    let setup = res.data.setup

    const randomQuoteElem = document.createElement(`div`)
    randomQuoteElem.innerHTML = 
    `<div>
    <h1>Setup : ${setup}</h1>
    <h2>Punchline : ${punchLine}</h2>
    </div
    `

    document.getElementById('quote').append(randomQuoteElem)

    // randomQuoteDisplay = document.getElementById(`quote`).innerHTML = `
    // <h1>Setup : ${setup}</h1>
    // <h2>Punchline : ${punchLine}</h2>
    // `

  })
  .catch(err => console.log(err))

})

