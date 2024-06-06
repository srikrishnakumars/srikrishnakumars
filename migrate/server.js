const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Create MySQL connection
const db = mysql.createConnection({
    host: 'your_rds_endpoint', // Replace with your RDS endpoint
    user: 'your_mysql_username', // Replace with your MySQL username
    password: 'your_mysql_password', // Replace with your MySQL password
    database: 'mydatabase' // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected');
});

// Body parser middleware
app.use(bodyParser.json());

// Route to handle POST request to add a user
app.post('/adduser', (req, res) => {
    const { name, birthYear, country } = req.body;
    const sql = 'INSERT INTO users (name, birthYear, country) VALUES (?, ?, ?)';
    db.query(sql, [name, birthYear, country], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('User added successfully');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
