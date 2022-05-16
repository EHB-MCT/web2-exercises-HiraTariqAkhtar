"use strict"

const teachers=['MD','EVE','BD'];
const studenten=['Betty','Teddy','Freddy','Pol'];

//CONCATENATE ARRAYS USING .concat()
const personConcat=teachers.concat(studenten);
console.log(personConcat);  //['MD', 'EVE', 'BD', 'Betty', 'Teddy', 'Freddy', 'Pol']

//SPREAD OPERATOR
const personSpread=[...teachers,...studenten];
console.log(personSpread);  // ['MD', 'EVE', 'BD', 'Betty', 'Teddy', 'Freddy', 'Pol']




const people=['MD','EVE','BD','Betty','Teddy','Freddy','Pol'];

//DESTRUCTURING
const[d1,d2,d3,s1,s2,s3,s4]=people;
console.log(d1,s1,s4); // MD Betty Pol

//REST OPERATOR
const[x1,x2,x3,...students]=people;
console.log(x2);  // EVE
console.log(students);  // ['Betty', 'Teddy', 'Freddy', 'Pol']