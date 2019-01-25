'use strict';

const express = require('express');
console.log(process.env)

// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static(('./app')))

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);