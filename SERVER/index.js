const express = require('express');
const app = express();
require('dotenv').config();

app.listen(3000, () => {
    console.log("servidor ejecutandose...");
    console.table({ user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        server: process.env.SQLSERVER,
        database: process.env.DB_NAME})
})