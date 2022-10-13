import "dotenv/config";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-abi-exporter";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

// Example task
task("hello", "Prints 'Hello, World!'", async () => {
  console.log("Hello, World!");
});

const { MUMBAI_ALCHEMY_API_URL, MNEMONIC, POLYGONSCAN_KEY, REPORT_GAS } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: MUMBAI_ALCHEMY_API_URL,
      accounts: {
        mnemonic: MNEMONIC
      },
      gas: 2100000,
      gasPrice: 8000000000
    }
  },
  abiExporter: {
    path: "./ABIs",
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: false,
  },
  gasReporter: {
    enabled: REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY
    }
  }
};

export default config;
