const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(8080, () => console.log('infra-core na porta 8080'));
