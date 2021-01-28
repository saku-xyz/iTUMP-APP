var mysql = require('mysql')
var db;

var settings = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-crud',
    
};

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {

            if (!err) {
                console.log("Database connected successfully!")
            } else {
                console.log("Database connection failed!")
            }
        })
    }

    return db;
}

module.exports = connectDatabase();