const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Web3BG", function () {
  it("Should mint and transfer an NFT to someone", async function () {
  const Web3BG = await ethers.getContractFactory("Web3BG");
  const web3BG = await Web3BG.deploy();
  await web3BG.deployed();
  
  const recipient = '';
  });
});
