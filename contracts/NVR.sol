pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NVR is ERC20, Ownable {
    uint256 cap = 21000000;
    constructor() ERC20("NVRToken", "NVR") {
        _mint(msg.sender, cap * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        uint256 total = totalSupply();
        require(total + amount <= cap, "Supply limit reached!" );
        _mint(to, amount);
    }
}
