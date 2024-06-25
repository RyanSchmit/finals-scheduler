import mysql from 'mysql2'

require('dotenv').config();

const connection = mysql.createPool({
    host:  process.env.DB_USERNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    
})