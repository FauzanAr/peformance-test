const express = require('express');
const app = express();
const { SIGTERM, SIGINT } = process;

const server = app.listen(9000, () => {
  console.log('Server running on port 9000');
});

const shutdown = () => {
  console.log('Server is shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

const quitSignals = [SIGTERM, SIGINT];
quitSignals.forEach(signal => {
  process.on(signal, () => {
    shutdown();
  });
});

app.get('/status', (req, res) => {
  res.json({ message: 'Server running' });
});
