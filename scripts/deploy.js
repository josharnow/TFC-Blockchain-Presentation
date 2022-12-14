const { ethers, run, network } = require("hardhat")

async function main() {
    // Make sure to replace the "BleuBucks" reference with your own ERC-20 name
    const Token = await ethers.getContractFactory(
        "BleuBucks"
    );
    const [deployer] = await ethers.getSigners();
    const weiAmount = (await deployer.getBalance()).toString();
    console.log(`Deploying contract with the account ${deployer.address}...`);
    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));
  
    const token = await Token.deploy();
    await token.deployed();

    const newWeiAmount = (await deployer.getBalance()).toString();

    console.log("New account balance:", (await ethers.utils.formatEther(newWeiAmount)));
    console.log(`Deployed contract to: ${token.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })