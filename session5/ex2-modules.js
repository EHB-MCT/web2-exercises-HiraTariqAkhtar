/* To let it execute the code :
    1. Package.json (npm init -y) => “type” : “module”
    2. Filename => .mjs
*/

/* Loop :
    Array => [array_name].forEach(...=>{...}), for (let i=... ,i<... i++),for(let i of [array_name]), ...
    Object => for (let ... in {object_name}) => loop over properties
 */

import * as fs from 'fs/promises';

let result = await fs.readFile('boardgames.json');
let data = JSON.parse(result)
// console.log(data);

for(let id in data){
/* approach the value of the properties in a dynamic way */
    console.log(data[id]);
    let string = JSON.stringify(data[id])
   await fs.writeFile(`${id}.json`, string)
}
