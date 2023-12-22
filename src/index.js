const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const bookRoutes = require('./routes/books.routes');
const config = require('./config/config');
require('./config/passport');
const passport = require('passport');
const app = express();


app.use(cors({
    origin: '*',
    credentials: true,
}));


app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/', bookRoutes);

app.get('*', function (req, res) {
    res.status(404).end("Route doesn't exist");
});

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
})