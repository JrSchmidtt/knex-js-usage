var database = require('./database');

query = [
    'product.id as product_id',
    'product.name as product_name',
    'store.id as store_id',
    'store.name as store_name'
]

database.select(query).table('product').innerJoin('store','store.product_id','product.id').where('product.id',4).then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});