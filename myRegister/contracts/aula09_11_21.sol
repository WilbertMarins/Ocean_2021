pragma solidity >=0.4.22 <0.6.0;

import "./strings.sol";

contract myRegister {
    
    /* CONSTRUTOR*/  //inicializado ao fazer deploy do contrato
   address owner;
   constructor() public {
      owner = msg.sender;
   }
   
   /* MODIFICADORES*/  //condicional
   modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }
   
    struct User {
        string nome;
        string idade;
        string cpf;
        string cargo;
        string endereco;
    }
    
     /* EVENTOS */
    event myUser(
       string nome,
        string idade,
        string cpf,
        string cargo
    );
    
    User[] usuarios;

    mapping(string=>User) public usuario; //mapear o caso do usuario, funciona como ponteiro
    
    function registerUser(string memory  _nome, string memory _idade, string memory _cpf, string memory _cargo, string memory _hash) public onlyOwner{
        
        User memory user;
        user.nome = _nome;
        user.idade = _idade;
        user.cpf = _cpf;
        user.cargo = _cargo;
        user.endereco = _hash;
        
        //mapping
        usuario[_hash]=user;
        //array
        usuarios.push(user);
        
        emit myUser(_nome, _idade, _cpf, _cargo); //momento que emitimos o evento

    }

    
    function allUsers() public view returns (uint length){
      return usuarios.length;
    }
    
   function getUser(string memory _id) public view returns(string memory userObtido) {
        string memory a;
        User memory c  =  usuario[_id];
            a = string( string(abi.encodePacked(" O nome do usuário é : ", c.nome, ", ",
                                                                    "de ", c.idade," anos ", ", ",
                                                                    "detentor do celular de número ", c.cpf, ", desempenha a função de ",
                                                                     c.cargo,".")));
         
           return a;
       }
       
}     
