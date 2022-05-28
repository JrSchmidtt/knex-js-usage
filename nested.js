var database = require('./database');

database.insert({ name: 'New Book', price: 15 }).into('product').then(data => {
    database.select(['id', 'price']).table('product').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})