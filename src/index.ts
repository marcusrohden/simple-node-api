import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './usersRouter';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// User router at '/api/user'
app.use('/api/user', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});