const mysql = require("mysql");

function getDatabaseConnection() {
    return mysql.createConnection({
        host: process.env.RDS_HOST, 
        user: process.env.RDS_USER,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE
    });
}

function getTasks() {
    const connection = getDatabaseConnection();
    return new Promise(function(resolve, reject) {
        connection.query("SELECT * FROM Tasks", function(error, results, fields)  {
            if (error) {
                connection.destroy();
                return reject(error);
            } 
            else {
                connection.end();
                return resolve(results);
            }
        });
    });
}

function saveTask(taskdescription){
    const connection = getDatabaseConnection();

    return new Promise(function(resolve, reject) {
        
        const postData  = {
            description: taskdescription, 
            userId: 1,
            completed: false
        };
        connection.query('INSERT INTO Tasks SET ?', postData, function (error, results, fields) {
            if (error) {
                connection.destroy();
                return reject(error);
            }
            else {
                connection.end();
                return resolve(results);
            }
        });
    });
}

module.exports = {
    getTasks,
    saveTask
}





//app = mini viable product
//using a wireframe diagram, how together, how the work has been mapped, what's been delegated, adv/disadv
//"trello" = breaking down actions 
//idea for app 
//send CV - becky

//the "function(error, results, fields" - this is an array, the connection query
//all the above is an array
//keeping the connection = keeping the connections up and open, where if the code comes, it'll have to
//query and then handle the code will know it's open
//everytime the code is given tot he database, the query will need to start
//server to keep the connection open = it'll initalise a "pool" of connections
//fields = an array of fields you're querying from [showing what you specify]