安装 yarn
`npm install -g yarn`

创建一个 Hardhat 项目
`mkdir hardhat-deploy-tutorial cd hardhat-deploy-tutorial yarn init --yes yarn add -D hardhat`

插件
`yarn add -D hardhat-deploy hardhat-deploy-ethers ethers chai chai-ethers mocha @types/chai @types/mocha @types/node typescript ts-node dotenv`

编译合约
`yarn hardhat compile`

部署脚本
`yarn hardhat deploy`

测试合约
`npx hardhat test`

部署到真实的网络
`yarn hardhat --network <network-name> deploy`

`yarn hardhat --network rinkeby deploy`

`yarn hardhat --network rinkeby sourcify`
