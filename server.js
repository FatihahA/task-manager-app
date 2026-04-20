const express = require('express');
const pool = require('./db'); // Importing database connection
const app = express();

app.use(express.json());

//------- ROUTES --------

// 'Add Task' endpoint - CREATE
app.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await pool.query(
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// 'Get Tasks' endpoint - READ
app.get('/tasks', async (req, res) => {
  try {
    // We use SELECT * to get every column, and ORDER BY to see the newest ones first
    const allTasks = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
    
    // Send the rows back to the user as a JSON array
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));