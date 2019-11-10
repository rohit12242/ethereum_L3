window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
        } catch (error) {
        }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    else {
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});



function showData(){
$.ajax({
  url: '/test',
  complete: function(data) {
    $('#example').DataTable( {
    data: data.responseJSON
      } );
  }
});

}
showData();

var form = document.getElementById("insert_form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if($('#ssn').val() == "")
  {
   alert("Ssn is required");
  }
  else if($('#firstname').val() == '')
  {
   alert("First Name is required");
  }
  else if($('#state').val() == '')
  {
   alert("State is required");
  }
  else if($('#city').val() == '')
  {
   alert("City is required");
  }
  else if($('#address').val() == '')
  {
   alert("Address is required");
  }
  else if($('#dob').val() == '')
  {
   alert("Date of birth is required");
  }
  else
  {
      var ssn = $('#ssn').val();
      var ssn1= Number(ssn);
      var firstname= $('#firstname').val();
      var lastname= $('#lastname').val();
      var state= $('#state').val();
      var city= $('#city').val();
      var address= $('#address').val();
      var dob = $('#dob').val();
      sendData(ssn1,firstname,lastname,state,city,address,dob);
      document.getElementById("close").click();
      $('#cover-spin').show(0)
    }
});

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

function sendData(ssn1,firstname,lastname,state,city,address,dob) {
  contractInstance.addCustomer(ssn1,firstname,lastname,state,city,address,dob,{from:web3.eth.accounts[0]},function(err,res) {
    if(!err){
      console.log(res);
    }
    else {
      $('#cover-spin').hide(0);
      alert("Error!");
    }
  });
}

var userEvent = contractInstance.user();
userEvent.watch(function(error, result){
            if (!error)
                {
                    dat=[result.args.ssn,result.args.firstName,result.args.secondName,result.args.state,result.args.city,result.args.streetAdd,result.args.dob]
                    var rowNode = $('#example').DataTable().row.add(dat).draw().node();
                    $( rowNode )
                    .css( 'color', 'red' )
                    .animate( { color: 'black' } );
                    $('#cover-spin').hide(0);
                    form.reset();
                } else {
                    alert("transaction failed");
                    $('#cover-spin').hide(0);
                }
        });
