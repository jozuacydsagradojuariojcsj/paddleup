const crypto = require('node:crypto'); // Use 'node:crypto' for modern Node.js

// Function to generate a random hex string of a specific byte length
function generateSecureHex(bytes) {
  return crypto.randomBytes(bytes).toString('hex');
}

// Generate a 32-byte secret (which results in a 64-character hex string)
const secret = generateSecureHex(32);
console.log('Your new secret:', secret);

// Example for a 64-byte secret (128-character hex string), often used for JWT HS512
// const secret = generateSecureHex(64);
// console.log('Your new secret:', secret);
