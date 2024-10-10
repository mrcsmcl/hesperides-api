// services/solanaService.js
const { Connection, PublicKey, clusterApiUrl, Keypair } = require('@solana/web3.js');
const { getOrCreateAssociatedTokenAccount, transfer, getMint } = require('@solana/spl-token');
require('dotenv').config();

// Carrega a chave privada do .env
const secretKey = Uint8Array.from(Buffer.from(process.env.PRIVATE_KEY, 'base64'));
const fromWallet = Keypair.fromSecretKey(secretKey);

async function transferToken(destinationAddress, amount) {
  const network = process.env.NETWORK || 'devnet';
  const connection = new Connection(clusterApiUrl(network), 'confirmed');

  // Carrega o token Mint Address do .env
  const mintAddress = new PublicKey(process.env.MINT_ADDRESS);

  // Carrega o mint do token
  const mint = await getMint(connection, mintAddress);

  // Cria ou obtém a conta de token associada da carteira de origem
  const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,        // Conexão
    fromWallet,        // Carteira de origem
    mintAddress,       // Mint do token (ecoin)
    fromWallet.publicKey // Dono da conta
  );

  // Cria ou obtém a conta de token associada da carteira de destino
  const destinationPublicKey = new PublicKey(destinationAddress);
  const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,          // Conexão
    fromWallet,          // Carteira de origem (para pagar taxas caso necessário)
    mintAddress,         // Mint do token (ecoin)
    destinationPublicKey // Dono da conta de destino
  );

  // Executa a transferência de tokens
  const transactionSignature = await transfer(
    connection,                  // Conexão
    fromWallet,                  // Carteira que envia
    fromTokenAccount.address,    // Conta de origem (da qual enviar os tokens)
    destinationTokenAccount.address, // Conta de destino (para onde enviar os tokens)
    fromWallet.publicKey,        // Dono da carteira que envia
    amount * Math.pow(10, mint.decimals) // Quantidade de tokens a ser transferida, ajustada pelas decimais do token
  );

  console.log(`Transferred ${amount} tokens to ${destinationAddress}. Transaction ID: ${transactionSignature}`);
  return transactionSignature;
}

module.exports = { transferToken };
