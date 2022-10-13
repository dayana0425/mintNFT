# Road To Web3: Week 1 🥳

### Tutorial Link: https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy
### Side Note: I didn't follow the tutorial exactly but I achieved the same outcome, I modified it to deploy on Polygon & used Hardhat instead of Remix.

### Used [Firebase](https://filebase.com/) for hosting my metadata on IPFS.

### Commands:
```
yarn compile
```
### Deploy to Polygon Mumbai testnet:
```
yarn deploy
```
### Output:
```
Using address 0xC0c630f5c9A78A75a92617852AD0F4E80BF252Cf
Wallet balance 0.7624262968620278
Deploying contract...
Awaiting confirmations
Completed!
Contract deployed to: 0x9708005B48B05022293Daa6ED5D8b551eEBefbF1
```

### [Verify Smart Contract on Polygonscan using Hardhat](https://coinsbench.com/verify-smart-contract-on-polygonscan-using-hardhat-9b8331dbd888)

```
cd packages/hardhat
yarn hardhat verify 0x9708005B48B05022293Daa6ED5D8b551eEBefbF1 --network mumbai
```
### Output:
```
Successfully submitted source code for contract
contracts/MintNFT.sol:HelloWorld at 0x9708005B48B05022293Daa6ED5D8b551eEBefbF1
for verification on the block explorer. Waiting for verification result...

Successfully verified contract HelloWorld on Etherscan.
https://mumbai.polygonscan.com/address/0x9708005B48B05022293Daa6ED5D8b551eEBefbF1#code
```# mintNFT
