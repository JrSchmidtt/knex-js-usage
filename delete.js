var database = require('./database');

database.where({id: 3}).delete().table('product').then(data =>{
    console.log(data)
}).catch(err =>{
    console.log(err);
});