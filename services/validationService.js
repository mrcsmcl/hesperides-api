// services/validationService.js

// Função simples para validar a authKey
function validateAuthKey(authKey) {
    // Por enquanto, apenas retorna true, mas pode será modificada para uma lógica mais robusta
    return authKey === 'valid-auth-key';
  }
  
  module.exports = { validateAuthKey };
  