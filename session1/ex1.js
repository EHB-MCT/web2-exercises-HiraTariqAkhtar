"use strict"

window.onload = function(){
    console.log("loaded");

    document.getElementById("form").addEventListener("submit", event=>{
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let order = document.getElementById("order").value;
        // console.log("NAME= " + name, "EMAIL= " +email, "ORDER= "+ order);
        
        document.getElementById("messages").innerHTML = `<p> The order for the customer ${name} is the following: ${order}. The customer may be notified by email: ${email}`;

    });
};