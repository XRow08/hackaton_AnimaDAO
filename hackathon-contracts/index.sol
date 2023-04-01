// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract evento is ERC1155 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public owner;
    string public name;
    string public symbol;
    string _contractURI;
    bool _sellControl;
    bool _prizeControl;
    address usdt;
    address nftPrizeAddress;
    address marketplaceAddress;


    mapping(uint => string) public tokenURI;

    struct prizePool{
        uint prizePercentage;
        uint amountEarned;
        uint totalTickets;
    }
    prizePool thisPrize;

    struct ticket{
        uint totalSupply;
        uint ticketPrice;
        bool isBenificent;
    }
    mapping(uint => ticket) ticketStatus;

    constructor(address owner_, string memory name_, string memory symbol_, string memory contractURI_, address marketplace_,  address usdt_, address royalts_) ERC1155("") {
        owner = owner_;
        name = name_;
        symbol = symbol_;
        _contractURI = contractURI_;
        _sellControl = false;
        _prizeControl = false;
        marketplaceAddress = marketplace_;
        usdt = usdt_;
        thisPrize.prizePercentage = 4000;
        _setDefaultRoyalty(royalts_, 500);
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "!Owner");
        _;
    }
    
    modifier onlyMktp(){
        require(marketplaceAddress == msg.sender, "!Mkt");
        _;
    }

    modifier onlyRoyalts(){
        address receiver = royaltReceiver();
        require(msg.sender == receiver, "!Royalts");
        _;
    }

    function viewOwner() public view returns(address){
        return owner;
    }

    function createTicket(uint totalSupply_, string memory uri_, uint price_, bool benificent_)external onlyOwner(){
        _tokenIds.increment();
        uint id = _tokenIds.current();

        setURI(id, uri_);

        ticketStatus[id].totalSupply = totalSupply_;
        ticketStatus[id].ticketPrice = price_;
        ticketStatus[id].isBenificent = benificent_;

        _mint(msg.sender, id, totalSupply_, "");
    }

    function viewTicketStatus(uint id_) public view returns(uint totalSupply, uint ticketPrice, bool isBenificent){
        return (ticketStatus[id_].totalSupply, ticketStatus[id_].ticketPrice, ticketStatus[id_].isBenificent);
    }

    function viewPrizePool() public view returns(uint prizePercentage, uint amountEarned,  uint totalTickets){
        return (thisPrize.prizePercentage, thisPrize.amountEarned, thisPrize.totalTickets);
    }
    
    function changeTicketPrice(uint id_, uint price_) external onlyOwner(){
        ticketStatus[id_].ticketPrice = price_;
    }

    function addTotalTickets(uint value_) public onlyMktp(){
        thisPrize.totalTickets += value_;
    }
    
    function addAmountEarned(uint value_) public onlyMktp(){
        thisPrize.amountEarned += value_;
    }

    function viewAmountEarned() public view returns(uint){
        return thisPrize.amountEarned;
    }

    function openSell() external onlyOwner(){
        _sellControl = true;
    }

    function openPrize() external onlyOwner(){
        _prizeControl = true;
    }

    function reedemPrize(uint id_) external{
        IERC20 usdtContract = IERC20(usdt);
        require(_prizeControl, "closed");
        require(ticketStatus[id_].isBenificent);

        _burn(msg.sender, id_, 1);

        uint value = ((thisPrize.amountEarned * thisPrize.prizePercentage) / 10000) / thisPrize.totalTickets;

        bool usdtTx = usdtContract.transferFrom(owner, msg.sender, value);
        require(usdtTx);
    }

    function reedemPrizeRoyalts() external onlyRoyalts(){
        IERC20 usdtContract = IERC20(usdt);     
        require(_prizeControl);

        address receiver = royaltReceiver();
        uint fee = 1000;

        uint value = (thisPrize.amountEarned * fee) / 10000;
        bool usdtTx = usdtContract.transferFrom(owner, receiver, value);
        require(usdtTx);
    }

    function viewPrizeControl() public view returns(bool){
        return _prizeControl;
    }

    function viewSellControl() public view returns(bool){
        return _sellControl;
    }
    
    function setContractURI(string memory _uri) public onlyOwner(){
        _contractURI = _uri;
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    function setURI(uint256 _id, string memory _uri) private {
        tokenURI[_id] = _uri;
    }

    function uri(uint256 _id) public view override returns (string memory) {
        return tokenURI[_id];
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
        
        require(_sellControl || tx.origin == owner, "closed");
    }
}


contract factoryEventos{
    address[] creators;
    mapping(address => address[]) eventInventory;
    address usdt;
    address royalts;
    address marketplaceAddress;

    uint price;
    
    constructor(address usdt_, address royalts_, address marketplace_){
        usdt = usdt_;
        royalts = royalts_;
        marketplaceAddress = marketplace_;
        price = 10 * 10 ** 18;
    }

    function createEvent(address owner_, string memory name_, string memory symbol_, string memory contractURI_) external{
        IERC20 usdtContract = IERC20(usdt);

        bool usdtTx = usdtContract.transferFrom(owner_, royalts, price);
        require(usdtTx, "transfer Fail");
        
        evento newEvent = new evento(owner_, name_, symbol_, contractURI_, marketplaceAddress, usdt, royalts);

        if(eventInventory[owner_].length == 0){
            creators.push(owner_);
        } 
        eventInventory[owner_].push(address(newEvent));        
    }

    function viewEventInventory(address owner_) public view returns(address[] memory){
        return eventInventory[owner_];
    }

    function viewCreators() public view returns(address[] memory){
        return creators;
    }
}

contract marketplace{
    address usdt;
    constructor(address usdt_){
        usdt = usdt_;
    }

    function buyTicket(address collection_, uint id_, uint amount_)external{
        IERC20 usdtContract = IERC20(usdt);
        evento eventoContract = evento(collection_);

        address owner = eventoContract.viewOwner();

        uint totalTickets = eventoContract.balanceOf(owner, id_);

        require( totalTickets > 0, "Sold!"); 

        ( , uint ticketPrice, bool isBenificent ) = eventoContract.viewTicketStatus(id_);

        (address royaltReceiver, uint royaltAmount) = eventoContract.royaltyInfo(id_, ticketPrice);
        uint sellerAmount = ticketPrice - royaltAmount;

        usdtContract.transferFrom(msg.sender, royaltReceiver, royaltAmount * amount_);
        

        usdtContract.transferFrom(msg.sender, owner, sellerAmount * amount_);
        

        eventoContract.safeTransferFrom(owner, msg.sender, id_, amount_, "");

        if(!isBenificent){
            eventoContract.addAmountEarned(ticketPrice * amount_);
        }else{
            eventoContract.addTotalTickets(amount_);
        }
    }
}


contract usd is ERC20{
    constructor()
    ERC20("USDT","USDT"){
        _mint(msg.sender, 100000000000000000000000000 * 10 ** decimals());
    }
}