pragma solidity ^0.8.4;

contract calidBurn {
    
    address owner;
    uint256 lastId;
    mapping(address => Producto[]) productos;
    struct Producto {
        uint256 id;
        uint256 price;
        bool purchased;
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    
    constructor () {
        owner = msg.sender;
        lastId = 1;
    }
    
    function newOwner(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }
    
    function getOwner() view public returns(address) {
        return owner;
    }
    
    // pagar al contrato, verificando que el monto sea correcto
    function incrementBalance(uint256 amount) payable public {
        require(msg.value == amount);
    }
    
    // transfiere los fondos del contrato al owner
    function withdrawBalance() public onlyOwner payable {
        //msg.sender.transfer(address(this).balance);
    }
    
    function getBalance() view public returns(uint256) {
        return address(this).balance;
    }

    function addProduct(uint256 _price) public {
        Producto memory producto = Producto({id: lastId, price: _price, purchased : false});
        lastId++;
        productos[msg.sender].push(producto);
    }

    function getFirstProduct() public view returns(Producto memory) {
        return productos[msg.sender][0];
    }
    
    function getFirstId() public view returns(uint256) {
        return productos[msg.sender][0].id;
    }
    
    function purchaseProduct(uint256 id, address productOwner) public payable {
        Producto[] memory products = productos[productOwner];
        uint256 i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                uint256 _price = products[i].price;
                if (_price == msg.value) {
                    products[i].purchased = true;
                }
            }
        }
        
    }
}