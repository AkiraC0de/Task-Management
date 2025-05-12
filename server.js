const express = require('express');

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`The Server is running at PORT ${process.env.PORT}`)
})