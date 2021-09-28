require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe story cruise remember unable inside light army gas'; 
let testAccounts = [
"0x253153cf235922c9a127c5aa63c730911691d43392c37eb4355a5df3a949a6e9",
"0x99cd5f5630aa31b331962d726f2b318ab92df522f5018689d7150fca0e9e4de4",
"0xec4ea971109e952be3fdda03a5b8d6a1f51da03fddb124e2a924e882be8f9954",
"0x3f220716a82cd0581662945c65ea169329bb18b13c645e29c8633f2e2c51af82",
"0x68c68dcf4f9e15b5a158f4ddc7d160035ebc94c6cc9bfef79a72101710927bf2",
"0xef0f3dabe8b563db7a09d06990494229e0aa51c8039a05fedcf79839721ba73f",
"0x8d7923f035184839d7f7896065c13be197c6b39fe40faad0098cb5a2fb4eebde",
"0xd03763c0991952bf15c9f2db3a598a5a5f2f0ddd6a746de8c681a791b6f75652",
"0xcef9c1a0a01b9ce97c6223837b5dbed2881c319bb266d592e7f268a6c5ffa198",
"0xcc4bc6f458265b8294500895a15e695dba6f726ff24a24ce2c0a77f4073fefdf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

