const express = require('express');
const connectToDB = require('./db/connect');

const app = express();

// routes
const authRoute = require('./routes/Auth.routes')

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(process.env.PORT, () => {
    connectToDB();
    console.log(`The Server is running at PORT ${process.env.PORT}`);
})