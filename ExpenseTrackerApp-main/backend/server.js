const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',   // replace with your MySQL username
    password: '1007', // replace with your MySQL password
    database: 'tracker1'     // replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection failed:', err);
        return;
    }
    console.log('MySQL Connected');
});

// Middleware
app.use(cors());  // Enable CORS for all routes

// API to get all expenses
app.get('/api/expenses', (req, res) => {
    const query = 'SELECT * FROM expenses';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Server Error');
        }
        res.json(results);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
