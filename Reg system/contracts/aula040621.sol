pragma solidity >=0.4.22 <0.6.0;

import "./strings.sol";

contract RBCContract {
    

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
   
    struct Caso {
        
        string nome;
        string idade;
        string cpf;
        string cargo;
    }
    
     /* EVENTOS */
    event casoInfo(
       string nome,
        string idade,
        string cpf,
        string cargo
    );
    
    Caso[] baseDeCasos;

    mapping(string=>Caso) public usuario; //mapear o caso do usuario, funciona como ponteiro
    
    function inserirCaso(string memory  _nome, string memory _idade, string memory _cpf, string memory _cargo) public onlyOwner{
        
        Caso memory caso;
        caso.nome = _nome;
        caso.idade = _idade;
        caso.cpf = _cpf;
        caso.cargo = _cargo;
        
        usuario[_cpf]=caso;  
        baseDeCasos.push(caso);
        
        emit casoInfo(_nome, _idade, _cpf, _cargo); //momento que emitimos o evento

    }
    
   
    
    function getQtdCasos() public view returns (uint length){
      return baseDeCasos.length;
    }
    
   function getCasos(string memory _id) public view returns(string memory casosObtidos) {
        string memory a;
        Caso memory c  =  usuario[_id];
            a = string( string(abi.encodePacked(" O nome do usuário é : ", c.nome, ", ",
                                                                    "de ", c.idade," anos ", ", ",
                                                                    "detentor do CPF de número ", c.cpf, ", desempenhando a função de ",
                                                                     c.cargo,".")));
         
           return a;
       }
       
}     
