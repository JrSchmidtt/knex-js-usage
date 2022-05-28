var database = require('./database');

var query = database.select()
    .where({ name: 'Clean code book' })
    .table('product').then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    });