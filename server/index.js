const express = require('express');
const PORT = 5000;
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log('Proxy Listening on :', PORT));