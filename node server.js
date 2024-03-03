// app.js
// Required modules
const express = require('express');
const path = require('path');
// Create Express app
const app = express();
// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));
// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Define route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
