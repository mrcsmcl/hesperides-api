// routes/transfer.js
const express = require('express');
const router = express.Router();
const solanaService = require('../services/solanaService');
const validationService = require('../services/validationService');

// Rota POST para transferir tokens
router.post('/', async (req, res) => {
  const { destination, amount, authKey } = req.body;

  // Valida a chave com a função separada
  const isValidKey = validationService.validateAuthKey(authKey);
  if (!isValidKey) {
    return res.status(400).json({ error: 'Invalid authorization key' });
  }

  try {
    // Chama o serviço de transferência de tokens
    const txId = await solanaService.transferToken(destination, amount);
    return res.status(200).json({ txId });
  } catch (error) {
    console.error('Error during token transfer:', error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
