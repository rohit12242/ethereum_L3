const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/8b2159b7b0944586b64f0280c927d0a8"
  ))

abi= [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Ssn",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "FirstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "SecondName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "State",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "City",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "StreetAdd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Dob",
				"type": "string"
			}
		],
		"name": "addCustomer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ssn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "firstName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "secondName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "state",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "streetAdd",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "dob",
				"type": "string"
			}
		],
		"name": "user",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "x",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]


var customerContract = web3.eth.contract(abi);
contractInstance = customerContract.at('0x9c56cd8EE2c094E2A4C67F2fE52fe41a19CCdF5C');

module.exports = contractInstance;
