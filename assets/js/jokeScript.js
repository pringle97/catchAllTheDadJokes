// let i = 0;
// let jokeSetup = `${setup}`;
// let speed = 50;

// function typeWriter() {
//   if (i < jokeSetup.length) {
//     document.getElementById("quote").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }



document.getElementById('random').addEventListener('click', event => {
  event.preventDefault();

  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  const quoteElem = document.getElementById('quote');
  const setupElem = document.getElementById('setup');
  const jokeElem = document.getElementById('joke');
  let i = 0;
  let speed = 10;
  
  
  if (randomNumber === 0 ) {
    
    axios.get(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes`)
    .then(res => {
      console.log(res);
        
        let punchline = res.data.punchline;
        let setup = res.data.setup;
        let words = `${setup} - ${punchline}`
        
        setupElem.innerHTML = '';
        quoteElem.innerHTML = '';
        jokeElem.innerHTML = '';
      
        function typeWriter() {
          if (i < words.length) {
            document.getElementById("setup").innerHTML += words.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
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

        quoteElem.innerHTML = '';
        setupElem.innerHTML = '';
        jokeElem.innerHTML = '';

        console.log(quote)

        function typeWriter2() {
          if (i < quote.length) {
            document.getElementById("quote").innerHTML += quote.charAt(i);
            i++;
            setTimeout(typeWriter2, speed);
          }
        }

        typeWriter2()

      })
      .catch(err => console.log(err))
  } else {
    axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`)
      .then(res => {
        console.log(res);
        let joke = res.data.joke;
        
        quoteElem.innerHTML = '';
        setupElem.innerHTML = '';
        jokeElem.innerHTML = '';

        function typeWriter3() {
          if (i < joke.length) {
            document.getElementById("quote").innerHTML += joke.charAt(i);
            i++;
            setTimeout(typeWriter3, speed);
          }
        }
        
        typeWriter3();
         
      })
      .catch(err => console.log(err))
  }

})




