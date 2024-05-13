const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userFileRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Coview Testing Server!');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist.');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
