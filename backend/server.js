const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Importing database connection
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
}));
app.use(express.json());


//------- ROUTES --------

// 'Add Task' endpoint - CREATE
app.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim().length === 0) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = await pool.query(
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
      [title.trim(), description || null]
    );
    res.status(201).json(normalizeTask(newTask.rows[0]));
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// 'Get Tasks' endpoint - READ
app.get('/tasks', async (req, res) => {
  try {
    const allTasks = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
    
    // Send the rows back to the user as a JSON array
    res.json(allTasks.rows.map(normalizeTask));
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// 'Mark a task as completed or change the title' endpoint - UPDATE
app.put('/tasks/:id', async (req, res) => {

  try {
    const { id } = req.params; // Get ID from the URL (e.g., /tasks/1)
    const { is_completed } = req.body; // Get the new status from the JSON body

    const updateTask = await pool.query(`
      UPDATE tasks
      SET is_completed = $1
      WHERE id = $2
      RETURNING *
    `, [Boolean(is_completed), id]);

    if (updateTask.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(normalizeTask(updateTask.rows[0]));
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to update task' });
  }

});

// 'Remove Task' endpoint - DELETE
app.delete('/tasks/:id', async (req, res) => {

  try {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
   
    res.json("Task was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});



if (require.main === module) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

function normalizeTask(task) {
  return {
    ...task,
    completed: task.completed ?? task.is_completed ?? false,
  };
}

module.exports = app;

