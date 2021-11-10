require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food group rival payment undo hundred light army gift'; 
let testAccounts = [
"0x739282b040a0275c34e1b9790a8b430ac970170526d090a55a0f28299ef0077b",
"0x711cba5738bb719fe0adab698b46492b64784a649a1a76e7fdc3469be85f15e8",
"0x9daa60cb73a3ebb7bcc6a01b03137106d4cea63e7d8273ea59abbdc4de6370b3",
"0x69d713eb4180d4728b7af40e35be67508d5fa11213c3a929a2a516221e08f42c",
"0x8251d12fce587a0e0c9ba4a2a6e6aeb786e5e02116f89d04bcd9d204ed96bc04",
"0x36c3d793bbad53408191119576ae6da621eef24aa056410c44246ac869aa5f73",
"0x0a823c51e6fb63814e9b76e35dc7c2e79542421d454f84d7c1515a45835162f3",
"0x76c363fee06760d4c1b5d99d481fb23160cf29b41e1f800357e078f0d21c3d28",
"0x0e60b496e40324396aa1640c87cc29e24265015616c385ef208971a54b5728cf",
"0xd4d3aed65a1946e66293ee9fbf586a81adb64925d83248a21ce4ce49ab678572"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

