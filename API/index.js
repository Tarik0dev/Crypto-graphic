const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

const app = express();
app.use(express.json());

require('./config/db');
// ✅ Autoriser ton Angular (par ex. http://localhost:4200)
app.use(cors({
  origin: 'http://localhost:4200', // URL de ton Angular en dev
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API 🚀');
});

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
