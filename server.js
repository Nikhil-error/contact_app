const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/contact', require('./routes/contactRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});