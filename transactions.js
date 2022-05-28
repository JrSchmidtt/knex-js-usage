var database = require('./database');

async function transaction(){
    try{
        await database.transaction(async trans => {
            await database.insert({name:'Book Store'}).table('store');
            await database.insert({name:'Book Store 2'}).table('store');
            await database.insert({name:'Star Back'}).table('store');
        });
    }catch(err){
        console.log(err)
    } 
}

transaction()