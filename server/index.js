const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Routes
app.use('/api/auth', authRouter);


// 3. Mongo Db Connection
mongoose.connect('mongodb://127.0.0.1:27017/authentication')
        .then(()=> console.log('Connected to MongoDB.'))
        .catch((error)=>console.error("Failed to connect to MongoDB.", error));


// 4. Global error handling

app.use((err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// 5. Server
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`App running on PORT: ${PORT}`);
});