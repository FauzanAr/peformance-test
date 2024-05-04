import { Hono } from 'hono';

const app = new Hono();
app.get('/status', (c) => c.json({ message: 'Server running' }));

// const shutdown = (signal) => {
//   console.log(`Received signal: ${signal}`);
//   app.stop((error) => {
//     if (error) {
//       console.error('Error during shutdown:', error);
//     } else {
//       console.log('Server closed successfully');
//     }
//     process.exit(0);
//   });
// };

// const quitSignals = ['SIGTERM', 'SIGINT'];
// quitSignals.forEach(signal => {
//     process.on(signal, () => {
//       shutdown();
//     });
// });

// app.listen(9000);
export default {
    port: 9000,
    fetch: app.fetch,
}
