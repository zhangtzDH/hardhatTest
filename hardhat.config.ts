import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import {node_url, accounts, apiKey} from './utils/network';
import "@nomiclabs/hardhat-etherscan";


const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
  },
  networks: {
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    goerli: {
      url: node_url('goerli'),
      chainId: 5,
      accounts: accounts('goerli'),
    },
    polygonMumbai: {
      url: node_url('polygonMumbai'),
      accounts: accounts('polygonMumbai'),
    },
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner: 0,
  },
  paths: {
    sources: 'src',
  },
  etherscan: {
    apiKey: {
      goerli: apiKey("goerli"),
      polygonMumbai:apiKey("polygonMumbai"),
    }
   },
};
export default config;
