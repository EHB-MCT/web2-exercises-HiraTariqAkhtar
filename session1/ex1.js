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

//     //ex5
//         document.getElementById("form").addEventListener("submit", event=>{
//         event.preventDefault();
//         let order = {
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             order: document.getElementById("order").value
//         }
//         // console.log(order);
//         printOrders(order)
//     });

    //ex6
        document.getElementById("form").addEventListener("submit", event=>{
            event.preventDefault();
            let dishes = [];
            dishes.push({
                id: '1',
                name: "Burger and french fries",
                price: "18"
            },
            {
                id: '2',
                name: "Pizza",
                price: "20" 
            },
            {
                id: '3',
                name: "Sushi",
                price: "25" 
            }
            );
            console.log(dishes);
            document.getElementById("dishChoice").innerHTML = `<input name="dish" type= "radio" id= "${dishes.id}" value= "${dishes.name}"
            <label for "${dishes.id}">${dishes.name}</label> `;
        });
}


// function of ex 5
// function printOrders(orderdetails){
//     document.getElementById("messages").innerHTML = `<p> The order for the customer <span> ${orderdetails.name} </span> is the following: <span>${orderdetails.order}</span>. The customer may be notified by email: <span>${orderdetails.email}</span>`;
// }
