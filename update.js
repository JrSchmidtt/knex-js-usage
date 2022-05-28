var database = require('./database');

database.where({id: 1}).update({price:65}).table('product').then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
});