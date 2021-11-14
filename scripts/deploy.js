async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("NVR");

    const addr1 = '0xA4087EA6d1De1Dc9f84A8f8d63657cf4AD456817';
    const addr2 = '0x23d503a59C4Cd3F30f013a63C44e020EFE22f798';
    const addr3 = '0xB594750dFe1cB1f564695Ff3C609f150DD0aE6c9';
    const addr4 = '0x663d5a3C7b8902D09FA5d69d14B12A076e90C6Ea';
    const addr5 = '0x4B59660dF531Eb1aE108FBA8FB485b0858eBf837';

    const token = await Token.deploy(addr1, addr2, addr3, addr4, addr5);

    console.log("Token address:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });