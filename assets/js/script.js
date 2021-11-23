// const pokemonArr = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggtor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]


let randomNumber = (Math.floor(Math.random()))

//generating number between 0 and 1 
let x = Math.floor((Math.random() * 2));
let ball = document.getElementById('ball')
let berry = document.getElementById('berry')
let goNear = document.getElementById('go-near')
let runAway = document.getElementById('run-away')
console.log(x)

let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let addDecimal = (num) => {
  return (num / 10).toFixed(1);
}

// function for mcss modals
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

// function for mcss scrollspy
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems);
});

// function for mcss sidenav
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// function for mcss tooltips
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});


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
});

{/* <span class="card-title">Card Title</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}






// document.getElementById('start-button').addEventListener('click', event => {
//   event.preventDefault()


//   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
//     .then(res => {
//       const pokemon = res.data
//       console.log(pokemon)
//       if (pokemon.types[0].type.name) {

//       }
//       document.getElementById('pokemon').
//         innerHTML = `
//     <h1>Pokemon Name: ${capitalize(pokemon.species.name)}</h1>
//     <h2>Type: ${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}</h2 >
//     <h5>Height: ${addDecimal(pokemon.height)} m</h5>
//     <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
//     <img src = "${pokemon.sprites.front_default}" alt="${pokemon.species.name}">
//     `
//       console.log(pokemon.sprites.front_default)
//     })
//     .catch(err => console.log(err))
// })

