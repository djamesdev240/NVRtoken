async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("NVR");

    // const addr1 = '0x9667BC9e53b8a5fc543082d3974291cBEdCE2F10';
    // const addr2 = '0x5A93d952Dc1C3DD804D52531f8867AF9d9C5CF3C';
    // const addr3 = '0xb20fC814b81d5e1706fb66DA24cc99cD9fc1b604';
    // const addr4 = '0xCba285218612045f5dFaB3c3cAac4560eF1e0162';
    // const addr5 = '0x04eB89C67c57BCFeaa1173dcf6Cd1F1eb3AdD5bF'; 

    const addr1 = '0x93D84c4672c5e56ade91FA72Ef01c5341b4AFd25';
    const addr2 = '0xFbD02E7ffca90aC4f6C67DADB4ce922eF2DF6414';
    const addr3 = '0x51657094D5001e0E9Bcc21ee58ddab5Ead0AbEf5';
    const addr4 = '0x227C6c431d6A4cD5df8070e7E07E87Eb65D209B7';
    const addr5 = '0x985532A2E3c45f2A2BeE91d7C2b1081E7fDb2aBC';

    const token = await Token.deploy(addr1, addr2, addr3, addr4, addr5);

    console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });