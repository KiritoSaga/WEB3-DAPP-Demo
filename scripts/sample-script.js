const hre = require("hardhat");

async function main() {

  const Web3BG = await hre.ethers.getContractFactory("Web3BG");
  const web3BG = await Web3BG.deploy();

  await web3BG.deployed();

  console.log("My NFT deployed to:", web3BG.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  