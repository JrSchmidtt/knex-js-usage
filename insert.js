var database = require('./database');

var data = [
    {
        name: "Clean code book",
        price: 30
    },
    {
        name: "Clean Architecture",
        price: 35
    },
    {
        name: "The Pragmatic Programmer",
        price: 25
    }
]

database.insert(data).into('product').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})