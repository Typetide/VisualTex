const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware per servire i file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Mappa la cartella 'node_modules' per renderla accessibile al browser
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Esempio di API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: "Ciao dal backend!", timestamp: new Date() });
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});