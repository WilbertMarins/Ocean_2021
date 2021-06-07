<h1 align="center">Regsblock</h1>


<p align="center" >
  <img alt="Regsblock" title="Regsblock" src=".info/example.JPG" />
</p>
<br>

### Tópicos 

:small_blue_diamond: [Tecnologias](#tecnologia)

:small_blue_diamond: [Projeto](#projeto)

:small_blue_diamond: [Features](#features)

:small_blue_diamond: [Execução](#execução-de-teste)

:small_blue_diamond: [Links Úteis](#links-úteis)


## Tecnologia

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Npm](https://nodejs.org/en/)
- [VsCode(opcional)](https://code.visualstudio.com/)
- [Ganache](https://www.trufflesuite.com/ganache)
- [Remix IDE(rodar no site)](https://remix.ethereum.org/)
- [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)
- [Web3JS(lib no projeto)](https://github.com/WilbertMarins/Ocean_2021/blob/main/Reg%20system/frontend/js/web3.min.js)
- [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)



## Projeto

O Regsblock é um sistema desenvolvido com intuito de fornecer uma visão inicial acerca do desenvolvimento de aplicações descentralizadas para a Blockchain Ethereum. Onde utilizamos alguns conceitos fundamentais para a elaboração do contrato inteligente e realizamos a comunição com o frontend. 


### Features

- [x] Cadastro de usuário
- [x] Consulta do usuário
- [ ] Validador de CPF(chave primária na aplicação)

## Execução de teste
- Abrir o Ganache(Modo quickstart)

- Conectar o Metamask
  <p align="center" >
  <img alt="Metamask" title="Metamask" src=".info/metamask.JPG" />
  </p>
  <br>

- Efetuar deploy do contrato a partir do RemixIDE
  * Copiar os contratos e seus respectivos nomes devido a questão de dependência
  * Compilar o contrato "aula040621.sol"
  <p align="center" >
  <img alt="Compilar" title="Compilar" src=".info/compilar.JPG" />
  </p>
  <br>
  
  * Utilizar Inject Web3
  <p align="center" >
  <img alt="Deploy" title="Deploy" src=".info/deploy.JPG" />
  </p>
  <br>
  
  * Copiar o hash do contrato
  <p align="center" >
  <img alt="Hash" title="Hash" src=".info/hash.JPG" />
  </p>
  <br>
    
- Atualizar o valor da sua variável no script de cada página
  <p align="center" >
  <img alt="Endereço" title="Endereço" src=".info/endereco.JPG" />
  </p>
  <br>

- Levantar o servidor
  * Escolha o diretório do seu frontend  
  <p align="center" >
  <img alt="Sever" title="Server" src=".info/server.JPG" />
  </p>
  <br>  

## Links Úteis
- [Artigo sobre o Bitcoin](https://bitcoin.org/bitcoin.pdf)
- [Curso de solidity CryptoZombies](https://cryptozombies.io/pt/)
