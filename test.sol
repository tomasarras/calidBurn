pragma solidity ^0.4.17;

contract test {
    string firstName;
    string lastName;
    int balance;
    
    function test() public {
        balance = 0;
    }
    
    function setFirstName(string _firstName) public {
        firstName = _firstName;
    }
    
    function setLastName(string _lastName) public {
        lastName = _lastName;
    }
    
    function getFirstName() public view returns (string) {
        return firstName;
    }
    
    function getLastName() public view returns (string) {
        return lastName;
    }
    
    function incrementBalance(int amount) public {
        balance = balance + amount;
    }
    
    function getBalance() public view returns (int) {
        return balance;
    }
    
    function setData(string _firstName, string _lastName, int amount) public {
        firstName = _firstName;
        lastName = _lastName;
        balance = balance + amount;
    }
}