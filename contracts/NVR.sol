pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NVR is ERC20, Ownable {
    uint256 cap = 21000000 * 10 ** decimals();
    uint256 firstMint = 10500000;
    uint256 remainder; 

    constructor(
        address addr1, 
        address addr2, 
        address addr3, 
        address addr4, 
        address addr5, 
        address addr6
        ) ERC20("NVRToken", "NVR") {
        uint256 addr1TokenAmount = 1050000 * 10 ** decimals();
        uint256 addr2TokenAmount = 1050000 * 10 ** decimals();
        uint256 addr3TokenAmount = 140000 * 10 ** decimals();
        uint256 addr4TokenAmount = 140000 * 10 ** decimals();
        uint256 addr5TokenAmount = 140000 * 10 ** decimals();

        _mint(msg.sender, firstMint * 10 ** decimals());
        
        transfer(addr1, addr1TokenAmount);
        transfer(addr2, addr2TokenAmount);
        transfer(addr3, addr3TokenAmount);
        transfer(addr4, addr4TokenAmount);
        transfer(addr5, addr5TokenAmount);

        remainder = balanceOf(msg.sender);

        transfer(addr6, remainder);
    }

    function getRemainder() public view returns (uint256){
        return remainder; 
    }

    function mint(address to, uint256 amount) public {
        uint256 total = totalSupply();
        require(total + amount <= cap, "Token limit reached!" );
        _mint(to, amount);
    }
}
