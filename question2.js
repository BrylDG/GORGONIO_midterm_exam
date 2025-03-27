const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.redirect('/test'); // Redirects the user to the '/test'
});

app.get('/test', (req, res) => {
    res.json({
        message: 'Express is working! Bryl Darel M. Gorgonio'
        // displays a message when succesfully running.
    });
});

// Message to notify user that server is running and which port the system is listening to.
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
