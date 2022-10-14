# Road To Web3: Week 1 - Mint NFTs 🥳

### Tutorial Link: https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy
**Side Note**: I didn't follow the tutorial exactly but I achieved the same outcome, I modified it to deploy on Polygon & used Hardhat instead of Remix.
### Questions:
1. What was the biggest lesson from this challenge?
      - The biggest lesson for me was learning that an NFTs metadata isn't stored on-chain. I used to think only the image was stored on IPFS but I didn't know that the metadata was stored on IPFS too. 
2. What did you like/dislike about this challenge? Why?
      - It was super cool learning how NFTs work & creating metadata that adheres to OpenSea's metadata standard! :) 
3. What do you want to build next?
      - Dynamic NFTs!
      - A UI for Minting NFTs.
      - NFTs that you can stake.
      
### How Did I Mint?
1. First, I used OpenZepplin's Smart Contract Wizard to create my ERC21 Smart Contract. [see here](https://docs.openzeppelin.com/contracts/4.x/wizard)
2. I deployed my contract to Polygon Mumbai & then verified my contract. 
      1. Verifying your contract is important because it allows you to interact with your contract directly from PolygonScan! Once your contract is verified, PolygonScan provides a simple UI for read/write functions. 
      2. See below for how to verify your contract on PolygonScan from the Command Line. 
3. After verifying my contract, I uploaded my image for my NFT to Filebase. Then, I created my metadata file according to OpenSea's metadata standard. [see here](https://docs.opensea.io/docs/metadata-standards)
      1. [Filebase Website](https://filebase.com/) for hosting NFT metadata/images on IPFS.
      2. You can view the associated metadata for my NFT in the `metadata1.json` file. It follows OpenSea's metadata standard.
3. I then connected my wallet & called the `safeMint()` function with my address & the link to my metadata stored on IPFS.
      1. Address: `0x858C60547fE069724B017c8e42c4b27BE4F151C6`
      2. URI: `ipfs://QmbJ4tJAgTMuBLUheCYZezjHSKnUwyBYa9qN8xxRxYYXjM`
        ![Figure 1](images/polygonscan.png)
5. That's it!
    ![Figure2](images/opensea.png)

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
