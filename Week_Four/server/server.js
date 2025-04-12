const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to MyShop API');
});

// Products API
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 },
  { id: 3, name: 'Headphones', price: 199 },
  { id: 4, name: 'Smartwatch', price: 299 },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
