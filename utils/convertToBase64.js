require('dotenv').config();

const keyArray = process.env.PRIVATE_KEY_ARRAY.split(',').map(Number);
const base64Key = Buffer.from(Uint8Array.from(keyArray)).toString('base64');

console.log(base64Key);
