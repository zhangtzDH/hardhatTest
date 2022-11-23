## 安装 yarn

`npm install -g yarn`

## 创建一个 Hardhat 项目

`mkdir hardhat-deploy-tutorial`

`cd hardhat-deploy-tutorial`

`yarn init --yes`

`yarn add -D hardhat`

## 插件

`yarn add -D hardhat-deploy hardhat-deploy-ethers ethers chai chai-ethers mocha @types/chai @types/mocha @types/node typescript ts-node dotenv`

## 编译合约

`yarn hardhat compile`

## 部署脚本

`yarn hardhat deploy`

## 测试合约

`npx hardhat test`

## 部署到真实的网络

`yarn hardhat --network <network-name> deploy`

`yarn hardhat --network rinkeby deploy`

`yarn hardhat --network rinkeby sourcify`

`yarn hardhat --network goerli sourcify`

npx hardhat verify --contract "src/Token.sol" --network goerli 0xB129819C758c850999236be318DbCd1696bB118F
npx hardhat verify --network goerli 0xB129819C758c850999236be318DbCd1696bB118F
npx hardhat verify --network <goerli> <DEPLOYED_CONTRACT_ADDRESS> "Constructor argument 1"

npx hardhat verify --network goerli 0xB129819C758c850999236be318DbCd1696bB118F 000000000000000000000000983f185f303c7ed0543b65721657ace16cb19ceb

yarn hardhat --network polygonMumbai deploy

npx hardhat verify --network polygonMumbai 0x3BE4c41BFe994B127881630D0eeb9e350E633749 0x983f185F303C7eD0543b65721657aCE16cB19CeB
