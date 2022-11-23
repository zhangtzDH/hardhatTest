import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  console.log(deploy.toString)

  const {deployer, tokenOwner} = await getNamedAccounts();

  console.log(deployer)

  console.log(tokenOwner)
  await deploy('Token', {
    from: deployer,
    args: [tokenOwner],
    log: true,
  });
 
};
export default func;
func.tags = ['Token'];


