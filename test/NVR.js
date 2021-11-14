const { expect } = require("chai");

describe("NVR Token", function () {
    beforeEach(async function () {
        accounts = await ethers.getSigners();
        const addr1 = await accounts[1].getAddress();
        const addr2 = await accounts[2].getAddress();
        const addr3 = await accounts[3].getAddress();
        const addr4 = await accounts[4].getAddress();
        const addr5 = await accounts[5].getAddress();

        const NVRToken = await ethers.getContractFactory("NVR");
        token = await NVRToken.connect(accounts[0]).deploy(addr1, addr2, addr3, addr4, addr5);
        await token.deployed();
    });
    describe("Ownable", function () {
        it("It should let owners mint", async function () {
            const owner = accounts[0];
            const mintAmout = 1000;
            let originalBalance = await token.balanceOf(owner.getAddress());
            const mint = await token.mint(owner.getAddress(), mintAmout);

            let currentBalance = await token.balanceOf(owner.getAddress());
            expect(currentBalance).to.equal(BigInt(originalBalance) + BigInt(mintAmout));

        });
        it("It should prevent non-owners from minting", async function () {
            const address = await accounts[1].getAddress();
            const mintAmout = 1000;
            await expect(token.connect(accounts[1]).mint(address, mintAmout)).to.be.reverted
        });
    });
    describe("Mint Transfer", function () {
        it("Address 1 should have a balance of 1,050,000", async function () {
            const addr1 = accounts[1].getAddress();
            const addr2Balance = 1050000;
            expect(await token.balanceOf(addr1)).to.equal(addr2Balance);
        });
        it("Address 2 should have a balance of 1,050,000", async function () {
            const addr2 = accounts[2].getAddress();
            const addr2Balance = 1050000;
            expect(await token.balanceOf(addr2)).to.equal(addr2Balance);
        });
        it("Address 3 should have a balance of 140,000", async function () {
            const addr3 = accounts[3].getAddress();
            const addr3Balance = 140000;
            expect(await token.balanceOf(addr3)).to.equal(addr3Balance);
        });
        it("Address 4 should have a balance of 140,000", async function () {
            const addr4 = accounts[4].getAddress();
            const addr4Balance = 140000;
            expect(await token.balanceOf(addr4)).to.equal(addr4Balance);
        });
        it("Address 5 should have a balance of 140,000", async function () {
            const addr5 = accounts[5].getAddress();
            const addr5Balance = 140000;
            expect(await token.balanceOf(addr5)).to.equal(addr5Balance);
        });
    });

});