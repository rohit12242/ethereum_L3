pragma solidity >=0.4.0;

contract Customer {

    struct data {
        uint ssn;
        string firstName;
        string secondName;
        string state;
        string city;
        string streetAdd;
        string dob;
    }
    uint public x=0;
    mapping(uint=>data) dataset;

    event user(uint ssn,string firstName,string secondName,string state,string city,string streetAdd,string dob);

    function addCustomer(uint Ssn,string memory FirstName,string memory SecondName,string memory State,string memory City,string memory StreetAdd,string memory Dob) public {
        dataset[x]= data(Ssn,FirstName,SecondName,State,City,StreetAdd,Dob);
        x=x+1;
        emit user(Ssn,FirstName,SecondName,State,City,StreetAdd,Dob);
    }

    function get(uint a) public view returns(uint,string memory,string memory,string memory,string memory,string memory,string memory){
        return (dataset[a].ssn,dataset[a].firstName,dataset[a].secondName,dataset[a].state,dataset[a].city,dataset[a].streetAdd,dataset[a].dob);
    }
}
