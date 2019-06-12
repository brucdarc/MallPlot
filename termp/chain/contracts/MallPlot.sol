
pragma solidity ^0.5.7;

import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/ownership/Ownable.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/token/ERC721/ERC721Enumerable.sol";


contract MyERC721 is ERC721Enumerable, Ownable {


    string public name;
    string public symbol;
    address payable private AlsoOwner;



    constructor () public {
        name = "MallPlot";
        symbol = "MPL";
        AlsoOwner = msg.sender;

    }

    /**
    * Custom accessor to create a unique token
    */


    mapping(uint256 => uint256) floorPrices;


    function mint(uint id) public onlyOwner{
        _mint(msg.sender, id);
    }

    function setFloorPrice(uint256 floor, uint256 price) public onlyOwner{
        floorPrices[floor] = price;
    }

    function getFloor(uint256 id) public pure returns(uint256){
        return id.div(100);
    }

    function getPlotNum(uint256 id) public pure returns(uint256){
        return id%100;
    }
    function getFloorPrice(uint256 floor) public view returns (uint256){
        return floorPrices[floor];
    }

    function buyPlot(uint256 floor, uint256 plotNum) public payable  {
        require(plotNum < 100);
        require(floorPrices[floor] != 0);
        require(msg.value == floorPrices[floor]);
        uint256 id = floor.mul(100).add(plotNum);
        _mint(msg.sender, id);
    }

    function withdraw(uint amount) private onlyOwner returns(bool) {
        require(amount <= address(this).balance);
        AlsoOwner.transfer(amount);
        return true;
    }

}
