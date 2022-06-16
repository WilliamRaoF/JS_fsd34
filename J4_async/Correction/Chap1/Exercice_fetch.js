import fetch from "node-fetch";
import fs from 'fs';

let data;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => data = res)



setTimeout(() => {
    for(const elem of data){
        let name = elem.name;
        let geo = elem.address.geo;
        let nameAndGeo = ('name: ' + name + ' lat: ' + geo.lat + ' lng: ' + geo.lng + '\n');
        fs.appendFile('./data/nameAndGeo.json', nameAndGeo, function (err) {
            if (err) {
                throw err;
            }
        })
    }
        
},1000);

 

