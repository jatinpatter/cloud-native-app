const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Cloud-Native App Active!</h1><p>Tag: ${process.env.APP_VERSION || 'v1.0.0'}</p>`);
});

app.get('/healthz', (req, res) => res.status(200).send('OK'));
app.get('/ready', (req, res) => res.status(200).send('READY'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
