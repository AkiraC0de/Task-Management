const express = require('express');
const connectToDB = require('./db/connect');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();

// routes
const authRoute = require('./routes/Auth.routes');
const taskRoute = require('./routes/Task.routes')

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/auth', authRoute);
app.use('/api/task', taskRoute);

app.listen(process.env.PORT, () => {
    connectToDB();
    console.log(`The Server is running at PORT ${process.env.PORT}`);
})