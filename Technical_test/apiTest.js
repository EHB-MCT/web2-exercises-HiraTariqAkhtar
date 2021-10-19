"use strict";


async function fetchSerial (){
    let response = await fetch("http://api.themoviedb.org/3/discover/tv?api_key=daf4ffe88f06bba73b59069934fc3b37&with_origin_country=PK")
    return await response.json()
    .then (data => {
        console.log(data)
        let content = document.getElementById("data")
        let details = data.results
        details.forEach(serial =>{

            let html = `
            <h2> ${serial.name}</h2>
            <h3> Overview </h3>
            <p> ${serial.overview}</p>`
            content.insertAdjacentHTML("beforeend", html)
        })

})
}

/* => ook veel series op omdb */


fetchSerial()