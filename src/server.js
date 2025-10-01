// src/server.js
const app = require('./app');
const config = require('./config/env');


app.listen(config.port, () => {
console.log(`API running on http://localhost:${config.port}`);
});