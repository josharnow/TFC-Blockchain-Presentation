require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
// Any file that has require('dotenv').config() statement 
// will automatically load any variables in the root's .env file.
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli: {
      url: process.env.RPC_URL_GOERLI,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 5
    },
  }
};