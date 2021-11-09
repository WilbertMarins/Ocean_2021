//Declaração das 2 variáveis mais significativa para conexão com o contrato, fiquem atentos!!!!
//endereco muda a cada deploy  
//==============ALTERAR==============
export const endereco = '0xfaA81b3Bf419421790Da37564131E821F7828a5F';
//ABI: o contrato vem no formato JSON para que possa ser interpretado
//==============P/ ALTERAR, DEPENDE DA MODIFICAÇÃo DO CONTRATO PARA TESTE==============
//dados(endereco e ABI) do contrato se matém inalterados após o DEPLOY, pois o contrato não poderá sofre mais alterações
export const abi =[
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "nome",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "idade",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "cpf",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "cargo",
				"type": "string"
			}
		],
		"name": "myUser",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "allUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "length",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"internalType": "string",
				"name": "userObtido",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_nome",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_idade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cpf",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cargo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "usuario",
		"outputs": [
			{
				"internalType": "string",
				"name": "nome",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "idade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cpf",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cargo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "endereco",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]