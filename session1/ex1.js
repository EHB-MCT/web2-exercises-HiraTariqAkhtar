"use strict"

window.onload = function(){
    console.log("loaded");

    // //ex 1-4
    // document.getElementById("form").addEventListener("submit", event=>{
    //     event.preventDefault();
    //     let name = document.getElementById("name").value;
    //     let email = document.getElementById("email").value;
    //     let order = document.getElementById("order").value;
    //     // console.log("NAME= " + name, "EMAIL= " +email, "ORDER= "+ order);
        
    //     document.getElementById("messages").innerHTML = `<p> The order for the customer <span> ${name} </span> is the following: <span>${order}</span>. The customer may be notified by email: <span>${email}</span>`;
    //     //span toegevoegd om variabelen te kunnen stylen

    // });

    //ex5
        document.getElementById("form").addEventListener("submit", event=>{
        event.preventDefault();
        let order = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            order: document.getElementById("order").value
        }
        console.log(order)
        printOrders(order)
    });
}

function printOrders(orderdetails){
    document.getElementById("messages").innerHTML = `<p> The order for the customer <span> ${orderdetails.name} </span> is the following: <span>${orderdetails.order}</span>. The customer may be notified by email: <span>${orderdetails.email}</span>`;
}