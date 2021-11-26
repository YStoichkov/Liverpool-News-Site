const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./routes.js');
const initDatabase = require('./config/database.js');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware.js');

app.use(express.static(__dirname + '../..'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));
app.use(cookieParser());
app.use(auth);
app.use(cors({
    origin: [`http://localhost:3000`],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(routes);

initDatabase()
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server listening on port ${process.env.SERVER_PORT}`);
        })
    })
    .catch(error => {
        console.log(`Problem connecting to DB: `, error);
    });
