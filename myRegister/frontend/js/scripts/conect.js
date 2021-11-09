export function conectar () {
    //momento de conexão com a rede 
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        } 
    else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
        }
    //verifica se alguma carteira digital está conectada     
    web3.eth.getAccounts(function(err, accounts){
        if (err != null) {
            console.log(err);
        }
        else if (accounts.length === 0) {
            //caso não encontre carteiras
            console.log('MetaMask is locked');
            }
        else {
            //conecta a carteira de posição "0"
            web3.eth.defaultAccount = accounts[0];
            //alert(web3.eth.defaultAccount);
            }
        });
        


}