const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/484e9ac4368d456da49e629719012fc0"
);
// console.log(provider);

const queryBlockchain = async () => {
  const block = await provider.getBlockNumber();
  console.log("block", block);
};

queryBlockchain();
