const express = require('express');
const path = require('path');
 
const app = express();
 
app.use(express.static(path.resolve('../Equationator', 'public')));
 
const PORT = 80;
app.listen(PORT, () => console.log('listening on port', PORT));