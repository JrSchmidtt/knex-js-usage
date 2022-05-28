var database = require('./database');

database.select().table('product').orderBy('price', 'asc').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});