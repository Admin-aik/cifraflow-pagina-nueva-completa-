import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// AI Studio container runs Nginx on port 8080 which proxies to port 3000.
// If process.env.PORT is 8080, we must listen on 3000 so Nginx can proxy to us.
const PORT = (process.env.PORT && process.env.PORT !== '8080') ? process.env.PORT : 3000;

// Serve static assets from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Health check route for Cloud Run
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// SPA fallback: serve index.html for any request not handled by static files
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Production server running on 0.0.0.0:${PORT}`);
});
