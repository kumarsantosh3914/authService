const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const aipRoutes = require('./routes/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', aipRoutes);
    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
    });
};

prepareAndStartServer();