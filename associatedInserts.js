var database = require('./database');

database.insert({
    name: 'Amazon',
    product_id: 1
}).table('store').then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})