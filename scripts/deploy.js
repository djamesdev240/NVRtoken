async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("NVR");

    const addr1 = '0xa272652F369EB5ed63427196F2b9739aC86CC2a8';
    const addr2 = '0xf25b085D8AFc6BE9eb9b69a4Fa3BC5DFec487510';
    const addr3 = '0xB8d104717B5CbBbEeB57E5998cD2421C9882580e';
    const addr4 = '0x6240B5C8AC061E543274b0E5Ec62cE75f088D278';
    const addr5 = '0x951F83cAb11a111E02D1fd023Ec0eBA6e58aF090';
    const addr6 = '0x4BB5F9A669C5Bb720091AA163E323C2832E10Cd8';

    const token = await Token.deploy(addr1, addr2, addr3, addr4, addr5, addr6);
    const transferOwnership = await Token.transferOwnership(addr1);

    console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });