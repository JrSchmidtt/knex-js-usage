var database = require('./database');

database.raw("SELECT * FROM product").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})