// Import the required packages
{/*const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Use CORS to allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  res.status(201).json({ message: 'User registered successfully', user: { username, email } });
});

app.post('/login', (req, res) => {
  const { username, email, password } = req.body;
  // Authentication logic here
  res.status(200).json({ message: 'Login successful!' });
});

// Start the server on a different port (e.g., 5000) to avoid conflicts with Vite (port 5173)
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
*/}