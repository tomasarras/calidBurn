async function main() {
    //const calidBurnMarket = await ethers.getContractFactory("CalidBurnMarket");
    //const calidBurnMarket2 = await calidBurnMarket.deploy();
   // console.log("Contract CalidBurnMarket deployed to address:", calidBurnMarket2.address);
//    0x43B7F3182Dce897eC455BB46cB32Dd5a2EDDBabC
    const token = await ethers.getContractFactory("NFT");
    //const token2 = await token.deploy(calidBurnMarket2.address);
    const token2 = await token.deploy("0x43B7F3182Dce897eC455BB46cB32Dd5a2EDDBabC");
    console.log("Contract NFT deployed to address:", token2.address);
    //0x2abc1842ed71F4D3664D0d6847AD13695d9F4B4e
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });