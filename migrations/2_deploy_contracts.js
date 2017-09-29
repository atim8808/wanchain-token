var ConvertLib = artifacts.require("./ConvertLib.sol");
var Math = artifacts.require("./SafeMath.sol");
var WanChainICO = artifacts.require("./WanchainContribution.sol");

var wanPort = '0x21e7f6c5fe0e26609f271f6e9f1343bb753f1096';

module.exports = function(deployer,network, accounts) {
  var dateTime = new Date("2017-10-03T16:00:00Z");
  //var dateTime = new Date('2017/10/04 00:00:00');
  var left = dateTime % 1000;
  var timeseconds = (dateTime - left) / 1000;

  console.log(dateTime.toUTCString());
  console.log(timeseconds);

  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, [WanChainICO]);
  deployer.deploy(Math);
  deployer.link(Math, [WanChainICO]);
  deployer.deploy(WanChainICO,wanPort, timeseconds);

};