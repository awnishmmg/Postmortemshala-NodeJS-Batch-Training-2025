const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/', userRoutes);

// Serve generated docs statically
app.use('/docs', express.static(path.join(__dirname, 'docs')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📘 API docs available at http://localhost:${PORT}/docs`);
});
