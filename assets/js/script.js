// const pokemonArr = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggtor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]

let randomNumber = (Math.floor(Math.random()))

//generating number between 1 and 100 
let x = Math.floor((Math.random() * 100) +1);
let ball = document.getElementById('ball')
let berry = document.getElementById('berry')
let goNear = document.getElementById('go-near')
let runAway = document.getElementById('run-away')
console.log(x)

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
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let addDecimal = (num) => {
  return (num / 10).toFixed(1);
}

// the one mcss function to rule them all (conveniently initializes everything so components work)
M.AutoInit();


document.getElementById('start-button').addEventListener('click', event => {
  event.preventDefault();
  let pokemonNum = (Math.floor(Math.random() * 151) + 1)
  console.log(pokemonNum)

  document.getElementById('pokemon').innerHTML = '';

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      const pokemon = res.data;
      console.log(pokemon);
      let svg = pokemon.sprites.other.dream_world.front_default;

      if (pokemon.types[1]) {
        document.getElementById('cardContent').classList.remove('hide');
        document.getElementById('pokemon').innerHTML = `
        <img class="activator" src="${svg}" alt="${pokemon.species.name}">
        `;
        document.getElementById('cardContent').innerHTML = `
        <h2><strong>${capitalize(pokemon.species.name)}</strong></h2>
        <h5>Type: ${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}</h5>
        <h5>Height: ${addDecimal(pokemon.height)} m</h5>
        <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
        `;
      } else {
        console.log(pokemon);
        console.log(pokemon.types[0].type.name);
        document.getElementById('cardContent').classList.remove('hide');
        document.getElementById('pokemon').innerHTML = `
        <img class="activator" src ="${svg}" alt="${pokemon.species.name}">
        `;
        document.getElementById('cardContent').innerHTML = `
        <h2><strong>${capitalize(pokemon.species.name)}</strong></h2>
        <h5>Type: ${capitalize(pokemon.types[0].type.name)}</h5>
        <h5>Height: ${addDecimal(pokemon.height)} m</h5>
        <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
        `;
      }
    })
  // .catch (err => console.log(err))
})


let pokemon = document.getElementById('pokemon')

document.getElementById('ball').addEventListener('click', event =>{
  event.preventDefault();
  let catchPokemon = Math.floor(Math.random() * 1)
  console.log(catchPokemon)
   if (catchPokemon == 0) {
     alert("you've caught a pokemon!")
   }
  console.log(`Name: ${userName}`);
  addToLocalStorage(userName.value);
  userName.value = '';
});

const userName = document.getElementById('pokemon');
let caughtPokemon = JSON.parse(localStorage.getItem('caughtPokemonArr')) || [];

function addToLocalStorage(alreadyCaughtPokemon, newlyCaughtPokemon) {
  event.preventDefault
  //construct pokemon object.
  var pokedexObj = {
    pokemon: newlyCaughtPokemon,
  };
  // add new poke to array
  caughtPokemon.push(pokedexObj);
  // stringify the <array></array>
  var caughtPokemonToString = JSON.stringify(caughtPokemon);
  localStorage.setItem('caughtPokemonArr', caughtPokemonToString);
}

