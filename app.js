// app.js
require('dotenv').config();
const express = require('express');
const transferRoute = require('./routes/transfer');

const app = express();
app.use(express.json());  // Para tratar JSON no corpo das requisições

// Rota para transferências de tokens
app.use('/api/transfer', transferRoute);

// Inicializa o servidor na porta especificada no .env ou 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
