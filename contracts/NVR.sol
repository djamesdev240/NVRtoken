pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NVR is ERC20, Ownable {
    uint256 cap = 21000000;
    uint256 firstMint = 10500000;
    constructor(address addr2, address addr3, address addr4, address addr5) ERC20("NVRToken", "NVR") {
        uint256 addr2TokenAmount = 1050000;
        uint256 addr3TokenAmount = 140000;
        uint256 addr4TokenAmount = 140000;
        uint256 addr5TokenAmount = 140000;

        _mint(msg.sender, firstMint);
        transfer(addr2, addr2TokenAmount);
        transfer(addr3, addr3TokenAmount);
        transfer(addr4, addr4TokenAmount);
        transfer(addr5, addr5TokenAmount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        uint256 total = totalSupply();
        require(total + amount <= cap, "Token limit reached!" );
        _mint(to, amount);
    }
}
