## **Knex JS Usage**

* Code developed for academic purposes.
* Some operations to demonstrate the usage of KnexJs.

## Install and Run
1. Clone the repository : `git clone https://github.com/JrSchmidtt/knex-js-usage`
2. Install [node.js](https://nodejs.org/en/) to run 
3. Install [Visual Studio Code](https://code.visualstudio.com/) to edit 
4. Install [HeidiSQL](https://www.heidisql.com) and import database.sql
5. Open the powershell Terminal in Visual studio and run the command ``` npm install ``` in folder to install the dependencies
6. Run the command ```node <filename>.js``` in the folder with the usage examples

## Usage
1. Making a connection database.js

```javascript
var database = require('knex')({
    client:'mysql2',
    connection:{
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'knexjs'
    }
})
module.exports = database;
```

2. Insert ```node insert.js```
```javascript
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
```

3. Select e nested queries ```node nested.js```
```javascript
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
```



## Contributing

1. [Fork the repository](https://github.com/JrSchmidtt/knex-js-usage/fork)!
2. Clone your fork: `git clone https://github.com/JrSchmidtt/knex-js-usage`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D

## Author

**Knex JS Usage** © [JrSchmidt](https://github.com/JrSchmidtt).  
Authored and maintained by Schmidt#9639.


