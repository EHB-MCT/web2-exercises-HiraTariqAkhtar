"use strict";

let list = [];
let pokemon = [];

function fetchPokemons(){
    // get the list
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(res => res.json())
    .then(data => {
       list = data.results;
       //loop over the list to get each pokemon
       for(let element of list){
           fetch(element.url)
           .then(response => response.json())
           .then(data => {
               pokemon.push(data);
            //    console.log(pokemon);
           })
       }
    })
};  

window.onload = function(){
    fetchPokemons()
    setTimeout(buildList, 5000);
    function buildList(){
        pokemon.sort((a,b) => a.id - b.id);
        pokemon.forEach(p => {
            console.log(p);
            let html = `<div class = "card" id = "${p.id}">
                         <img src = "${p.sprites.front_default}">
                         <p> nr.${p.id}
                         <p> ${p.forms[0].name} </p>
                         <button> Add to team </button>
                         </div>`
            document.getElementById("list").insertAdjacentHTML("beforeend", html)
        })
    }
}
