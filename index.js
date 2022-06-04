var database = require('./database');

// Select All Data
database.select().table('product').then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err)
})

// Select 
database.select(['id','price']).table('product').then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err)
})

