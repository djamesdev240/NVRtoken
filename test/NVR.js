const { expect } = require("chai");

describe("NVR Token", function () {
    beforeEach(async function () {
        accounts = await ethers.getSigners();
        const addr1 = await accounts[1].getAddress();
        const addr2 = await accounts[2].getAddress();
        const addr3 = await accounts[3].getAddress();
        const addr4 = await accounts[4].getAddress();
        const addr5 = await accounts[5].getAddress();
        const addr6 = await accounts[6].getAddress();

        const NVRToken = await ethers.getContractFactory("NVR");
        token = await NVRToken.connect(accounts[0]).deploy(
            addr1,
            addr2,
            addr3,
            addr4,
            addr5,
            addr6
        );
        await token.deployed();
    });
    describe("Ownable", function () {
        it("It should let owners mint", async function () {
            const owner = accounts[0];
            const mintAmout = ethers.utils.parseEther("1000");
            let originalBalance = await token.balanceOf(owner.getAddress());
            const mint = await token.mint(owner.getAddress(), mintAmout);

            let currentBalance = await token.balanceOf(owner.getAddress());
            expect(currentBalance).to.equal(BigInt(originalBalance) + BigInt(mintAmout));

        });
        it("It should let non-owners mint", async function () {
            const user = accounts[1];
            const mintAmout = ethers.utils.parseEther("1000");
            let originalBalance = await token.balanceOf(user.getAddress());
            const mint = await token.mint(user.getAddress(), mintAmout);
            let currentBalance = await token.balanceOf(user.getAddress());
            expect(currentBalance).to.equal(BigInt(originalBalance) + BigInt(mintAmout));
        });
    });
    describe("Mint Transfer", function () {
        it("Address 1 should have a balance of 1,050,000", async function () {
            const addr1 = accounts[1].getAddress();
            const addr2Balance = ethers.utils.parseEther("1050000");
            expect(await token.balanceOf(addr1)).to.equal(addr2Balance);
        });
        it("Address 2 should have a balance of 1,050,000", async function () {
            const addr2 = accounts[2].getAddress();
            const addr2Balance = ethers.utils.parseEther("1050000");
            expect(await token.balanceOf(addr2)).to.equal(addr2Balance);
        });
        it("Address 3 should have a balance of 140,000", async function () {
            const addr3 = accounts[3].getAddress();
            const addr3Balance = ethers.utils.parseEther("140000");
            expect(await token.balanceOf(addr3)).to.equal(addr3Balance);
        });
        it("Address 4 should have a balance of 140,000", async function () {
            const addr4 = accounts[4].getAddress();
            const addr4Balance = ethers.utils.parseEther("140000");
            expect(await token.balanceOf(addr4)).to.equal(addr4Balance);
        });
        it("Address 5 should have a balance of 140,000", async function () {
            const addr5 = accounts[5].getAddress();
            const addr5Balance = ethers.utils.parseEther("140000");
            expect(await token.balanceOf(addr5)).to.equal(addr5Balance);
        });
        it("Address 6 should have a balance of 7,980,000", async function () {
            const addr6 = accounts[6].getAddress();
            const addr6Balance = ethers.utils.parseEther("7980000");
            expect(await token.balanceOf(addr6)).to.equal(addr6Balance);
        });
        it("Owner should have a balance of 0", async function () {
            const ownerAddress = await accounts[0].getAddress();
            const remainder = await token.getRemainder();
            expect(await token.balanceOf(ownerAddress)).to.equal(0);
        });
    });
    describe("Ownership", function () {
        it("It should transfer ownership to addr1", async function () {
            const owner = accounts[0];
            const addr1 = await accounts[1].getAddress();
            const tro = await token.transferOwnership(addr1)
            let newOwner = await token.owner();
            expect(newOwner).to.equal(addr1);
        });
    });
});