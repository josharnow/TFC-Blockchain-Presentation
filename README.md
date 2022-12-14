# Blockchain Deployment Guide

This project demonstrates how to deploy your very own ERC-20 token to the (Goerli testnet) Ethereum blockchain.

Much of this guide was adopted from [here](https://www.ankr.com/docs/tutorials/smart-contracts/erc-20-token-with-ankr-hardhat-on-goerli/).

1. Clone this repository.
2. Open the cloned repository in VSCode or your IDE of choice.
3. Run the following command to install dependencies:
```shell
npm i
```
4. Install the MetaMask browser extension.
- This will allow you to create a wallet and an account so you can start making transactions.
- If you have an account with real assets in it already, create another account for development purposes. Better yet, create an entirely new wallet.
- Never use an account you store real assets in for development purposes.
- The wallet will be secured by a mnemonic phrase. It is incredibly important that you secure this phrase to the best of your ability, particularly if the wallet contains accounts with real assets.
- If your phrase is compromised, another person will be able to drain every account in your wallet with ease. You have been warned.
- Take note of the private key for your account.
5. Create a free Alchemy account.
- On your dashboard, create a new application on the Goerli network.
- Click “VIEW KEY” on the row for the app you just created.
- Take note of the URL listed under “HTTPS.”
6. Access the Goerli faucet [here](https://goerlifaucet.com/). You will need your Alchemy account.
- Testnet ETH, unlike mainnet ETH, has no real value. It is used for development purposes only.
- Faucets provide developers with the testnet ETH they need to cover gas fees, which still exist even on testnet networks.
7. Create a .env file in the root of your project folder and add the following lines:
```shell
PRIVATE_KEY=YOUR_PRIVATE_KEY_FROM_METAMASK
RPC_URL_GOERLI=THE_URL_YOU_COPIED_IN_STEP_5
```
8. Run the following command to compile the contract:
```shell
npx hardhat compile
```
9. Run the following command to deploy the contract, taking note of the contract address returned:
```shell
npx hardhat run scripts/deploy.js --network goerli
```
10. View your newly minted cryptocurrency on the blockchain!
- The contract can be found at the following address: https://goerli.etherscan.io/address/YOUR_CONTRACT_ADDRESS_FROM_STEP_9








