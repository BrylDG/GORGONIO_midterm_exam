const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Using sequelize to connect to mysql database
const sequelize = new Sequelize('intprogDatabase', 'username', 'password', {
  host: 'localhost',
  username: '',
  password: ''
});

sequelize.authenticate()
  .then(() => console.log('Connected to the database successfully.'))
  .catch(err => console.error('Database connection failed:', err));

// Creating User model
const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  status: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'users', timestamps: false });

// Fetch all users using sequelize model
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send('Error fetching users!');
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
