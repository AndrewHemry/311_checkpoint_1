const db = require("../db")

const listAll = function(req,res){
// This is the query to the databse
// SQL: Select id, first_name, last_name FROM users

    db.query("SELECT id, first_name, last_name FROM users", function(err, results){
        if(err){
            console.log("Failed to fetch users from the database", err)
            res.sendStatus(500)
        } else {
            res.json(results)
        }
    })
}

const showSpecific = function(req,res){
// This is the query to fetch a specific user based on the path params   
// SQL: SELECT id, first_name, last_name FROM users WHERE id = ?

    // This is to store the changing ID variable
    let id = req.params.id

    // This is to help prevent SQL injection
    let sqlCommand = "SELECT id, first_name, last_name FROM users WHERE id = ?"
    let params = [id]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to fetch user from the database", err)
            res.sendStatus(500)
        } else {
            // res.json(results)
            if(results.length == 0){
                res.json(null)
            } else {
                res.json(results[0])
            }
        }
    })

}

const createNew = function(req,res){
// This is the command to create a new user in the USERS table
// SQL: INSERT INTO users(first_name, last_name, employment_status, age) VALUES ("first_name", "last_name", true, 18)

    // This is to understand what was sent in the Request Body
    let f_name = req.body.first_name
    let l_name = req.body.last_name
    let e_status = req.body.employment_status
    let user_age = req.body.age

    // This is to help prevent SQL injection
    let sqlCommand = "INSERT INTO users(first_name, last_name, employment_status, age) VALUES (?, ?, ?, ?)"
    let params = [f_name, l_name, e_status, user_age]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to fetch users from the database", err)
            res.sendStatus(500)
        } else {
            res.sendStatus(202)
        }
    })
}

const updateExisting = function(req,res){
// This is the command to update an existing user in the USERS table
// SQL: UPDATE users where id = ?

    // This is to understand what was sent in the Request Body
    let f_name = req.body.first_name
    let l_name = req.body.last_name
    let e_status = req.body.employment_status
    let user_age = req.body.age

    let id = req.params.id

    // This is to help prevent SQL injection
    let sqlCommand = "UPDATE users SET first_name = ?, last_name = ?, employment_status = ?, age = ? where id = ?"
    let params = [f_name, l_name, e_status, user_age, id]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to update user", err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}

const deleteUser = function(req,res){
// This is the command to delete an existing user in the USERS table
// SQL: DELETE users where id = ?

    // This is to prevent SQL injection
    let id = req.params.id
    let params = [id]
    let sqlCommand = "DELETE from users where id = ?"

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to delete user", err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}

module.exports = {
    listAll, showSpecific, createNew, updateExisting, deleteUser
}