# Hesperides API

A **Hesperides API** é uma API desenvolvida para o jogo em Unreal Engine em desenvolvimento, **Letz Kill**, que permite realizar transferências de tokens na rede Solana. Através de requisições POST, a API recebe parâmetros como a carteira de destino, valor e uma chave de autorização específica para validar transações.

## Funcionalidades Implementadas

- [x] Recebe requisições POST com os seguintes parâmetros:
  - `destination`: carteira de destino.
  - `amount`: valor a ser transferido.
  - `authKey`: chave de autorização.

## Funcionalidades em Planejamento

- [ ] Implementar a validação de transações com a chave de autorização.
- [ ] Configurar a API para uso com Docker.

## Configurações Necessárias

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```makefile
PORT=3000
NETWORK=devnet  # Pode ser 'mainnet-beta', 'testnet' ou 'devnet'
PRIVATE_KEY=your_private_key
PRIVATE_KEY_ARRAY=your_private_key_array  # Apenas para uso em convertToBase64.js. Apenas números e vírgula, não coloque colchetes.
MINT_ADDRESS=your_token_mint_address
```

## Configuração da Chave Privada

Para converter a chave privada para base64, utilize a função `convertToBase64.js` disponível na pasta `utils`.

## Como Usar

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Crie um arquivo `.env` e adicione suas chaves e parâmetros.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um *pull request* ou reportar problemas.
