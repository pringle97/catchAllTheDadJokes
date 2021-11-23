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

  let randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);
  
  
  if (randomNumber === 0 ) {
    
    axios.get(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes`)
    .then(res => {
      console.log(res);
        const quoteElem = document.getElementById('quote');
        const setupElem = document.getElementById('setup');
        const punchlineElem = document.getElementById('punchline');
        let punchline = res.data.punchline;
        let setup = res.data.setup;
        let words = `${setup} - ${punchline}`
        let i = 0;
        let speed = 30;
        
        
        console.log(setup)
        console.log(setup.charAt(i))
        console.log(words)
        
        setupElem.innerHTML = '';
        quoteElem.innerHTML = '';
        punchlineElem.innerHTML = '';

        function typeWriter() {
          if (i < words.length) {
            document.getElementById("setup").innerHTML += words.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }

        typeWriter()
        
        
        // function typeWriter2() {
        //   if (i < punchline.length) {
        //     document.getElementById("punchline").innerHTML += punchline.charAt(i);
        //     i++;
        //     setTimeout(typeWriter2, speed);
        //   }
        // }
        
        // console.log(punchline)
        // console.log()
        
        
        
        
        // typeWriter();
        // typeWriter2();
    
        // quoteElem.innerHTML = `
        //   <p>${setup}</p>
        //   <p>${punchline}</p>
        //   `;     
    })
  // .catch(err => console.log(err));

  } else {
    axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`)
      .then(res => {
        console.log(res);
        let joke = res.data.joke;
        const quoteElem = document.getElementById('quote');
        const setupElem = document.getElementById('setup');
        const punchlineElem = document.getElementById('punchline');
        let i = 0;
        let speed = 30;
        
        quoteElem.innerHTML = '';
        setupElem.innerHTML = '';
        punchlineElem.innerHTML = '';

        function typeWriter3() {
          if (i < joke.length) {
            document.getElementById("quote").innerHTML += joke.charAt(i);
            i++;
            setTimeout(typeWriter3, speed);
          }
        }
        // console.log(joke)
        // console.log(joke.charAt(i))
        typeWriter3();

                
      })
      .catch(err => console.log(err))
      
  }

})




