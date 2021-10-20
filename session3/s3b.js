"use strict";

let movieName = document.getElementById("movieName");
let content = document.getElementById("content");

const movieSearch = document.getElementById("search");
movieSearch.addEventListener("click", submitHandler);

function submitHandler(e) {
    e.preventDefault();
      let movieInput = movieName.value;
    //    console.log(movieInput);
       if(movieInput == ""){
           content.innerHTML = "Please enter a name first";
        } else{
            content.innerHTML = "Loading...";
        }
        movieName.value = "";
        fetchMovie(movieInput);
    }
    
    async function fetchMovie (movie){
        let response = await fetch(`http://www.omdbapi.com/?apikey=71d9bfe7&s=${movie}`)
        return await response.json()
        .then (data => {
            console.log(data)
            if (data.Search){
                let userInput = data.Search
                content.innerHTML = ""
                userInput.forEach(input =>{
                    let html = `
                    <h2> ${input.Title}</h2>
                    <h3>${input.Type} from${input.Year}</h3>
                    <img src = "${input.Poster}"</img>`
                    content.insertAdjacentHTML("beforeend", html);
                    movieName.value = "";
                })
            } else{
                content.innerHTML = data.Error;
                movieName.value = "";
        }
    })
}

