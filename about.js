const interactElem = document.getElementById(`interact`)


document.getElementById(`alan`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Alan`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.65m Weight: 58.97kg`
  document.getElementById(`type-screen`).innerHTML =`Psychic`
  document.getElementById(`id-screen`).innerHTML =`1`
})
document.getElementById(`kevin`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Kevin`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.80m Weight: 64.86kg`
  document.getElementById(`type-screen`).innerHTML =`Normal`
  document.getElementById(`id-screen`).innerHTML =`2`
})
document.getElementById(`malia`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Malia`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.63m Weight: 70.3kg`
  document.getElementById(`type-screen`).innerHTML =`Water`
  document.getElementById(`id-screen`).innerHTML =`3`
})
document.getElementById(`nathan`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Nathan`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.83m Weight: 70.3kg`
  document.getElementById(`type-screen`).innerHTML =`Grass/Rock`
  document.getElementById(`id-screen`).innerHTML =`4`
})
document.getElementById(`peter`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Peter Song`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.72m Weight: 65.77kg`
  document.getElementById(`type-screen`).innerHTML =`Electric`
  document.getElementById(`id-screen`).innerHTML =`5`
  document.getElementById(`main-screen`).innerHTML =`<img class="pictures" src="peterPic1.jpg">`
  
  

  let i = 0;
  let speed = 10;
  let words = `Hey! My name is Peter Song. My favorite hobbies are sports activites(Basketball, Football and Badminton) and video games(Currently League of Legends and Destiny 2).`
  interactElem.innerHTML = ``

  function typeWriter() {
    if (i < words.length) {
      document.getElementById(`interact`).innerHTML += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter()


})


