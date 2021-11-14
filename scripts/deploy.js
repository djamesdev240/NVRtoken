async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("NVR");

    const addr1 = '0x9667BC9e53b8a5fc543082d3974291cBEdCE2F10';
    const addr2 = '0x5A93d952Dc1C3DD804D52531f8867AF9d9C5CF3C';
    const addr3 = '0xb20fC814b81d5e1706fb66DA24cc99cD9fc1b604';
    const addr4 = '0xCba285218612045f5dFaB3c3cAac4560eF1e0162';
    const addr5 = '0x04eB89C67c57BCFeaa1173dcf6Cd1F1eb3AdD5bF'

    const token = await Token.deploy(addr1, addr2, addr3, addr4, addr5);

    console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });