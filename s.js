const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
app.use(express.static('public'));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ALiesraa1997',
  database: 'vagtebels-app'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to reset the water column in the database
app.get('/reset-water', (req, res) => {
  const resetQuery = 'UPDATE vegetables SET lastWatered = 0';

  // Execute the update query
  connection.query(resetQuery, (err) => {
    if (err) {
      console.error('Error resetting water:', err);
      res.status(500).send('Error resetting water');
      return;
    }

    res.send('Water reset successfully');
  });
});

// Route to fetch the vegetable data from the database
app.get('/vegetable-data', (req, res) => {
    const selectQuery = 'SELECT * FROM vegetables';
  
    // Execute the select query
    connection.query(selectQuery, (err, rows) => {
      if (err) {
        console.error('Error fetching vegetable data:', err);
        res.status(500).send('Error fetching vegetable data');
        return;
      }
  
      // Populate the rowsData array with the retrieved data
      rowsData = rows;
  
      res.json(rows);
    });
  });

// Route to handle watering a specific vegetable
app.post('/water-vegetable/:id', (req, res) => {
    const vegetableId = req.params.id;
    const updateQuery = 'UPDATE vegetables SET lastWatered = 0 WHERE id = ?';
  
    // Execute the update query with the vegetableId parameter
    connection.query(updateQuery, [vegetableId], (err) => {
      if (err) {
        console.error('Error watering vegetable:', err);
        res.status(500).send('Error watering vegetable');
        return;
      }
  
      res.send('Vegetable watered successfully');
    });
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
