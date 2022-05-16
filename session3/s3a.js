"use strict";

const randomNumber = Math.ceil(Math.random()*20);

function compareNumber(numInput){
    event.preventDefault();
    numInput = document.getElementById("num").value
    return new Promise(function(resolve, reject){
        if(numInput = NaN || numInput == ""){
            reject ("That is not a valid number")
        }
        if(numInput < randomNumber){
            resolve("The mystery number is higher. Guess again!")
        } else if (numInput > randomNumber){
            resolve("The mystery number is lower. Guess again!")
        } else if(numInput == randomNumber){
            resolve("You have guessed the mystery number!")
        }
    })
}
document.getElementById("btn").addEventListener("click",compareNumber(event));

compareNumber(num)