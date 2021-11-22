const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//Database connection
mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(data => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));

//Importing routes
const userRoutes = require('./routes/user.routes');
const rolRoutes = require('./routes/rol.routes');

//Settings


//Middlewares
app.use(express.json());

//Routes
app.use('/api', userRoutes);
app.use('/api', rolRoutes);

//Starting server
app.listen(port, () => console.log(`Server on port ${port}`));