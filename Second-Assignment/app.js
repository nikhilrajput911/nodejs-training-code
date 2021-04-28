const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First Middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Middleware');
//     res.send('<p>Assignment solved!</p>');
// });

app.use('/users', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>This hadles /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>This hadles /</p>');
});

app.listen(3000);