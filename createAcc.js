const Web3 = require('web3');
const web3 = new Web3('https://sepolia.infura.io/v3/16efd52704e34fd0aa10b5145917077a');

const createAccounts = function () {
const aliceKeys = web3.eth.accounts.create();
console.log('Alice\'s address:', aliceKeys.address);
console.log('Alice\'s private key:', aliceKeys.privateKey);

const bobKeys = web3.eth.accounts.create();
console.log('Bob\'s address:', bobKeys.address);
console.log('Bob\'s private key:', bobKeys.privateKey);

};

createAccounts();
