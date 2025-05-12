const express = require('express');
const connectToDB = require('./db/connect')

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
    connectToDB();
    console.log(`The Server is running at PORT ${process.env.PORT}`);
})