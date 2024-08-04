import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

// Calculate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set Pug as the view engine
app.set('view engine', 'pug');

// Set the directory where Pug templates are stored
app.set('views', path.join(__dirname, 'views'));

// Setting the public directory
app.use("/public", express.static(path.join(__dirname, "../public")))

// Define a route
app.get('/', (req, res) => {
  res.render('home');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
});

