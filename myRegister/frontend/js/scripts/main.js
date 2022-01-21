import { abi , endereco} from './contract.js'
import { conectar } from './conect.js'

conectar();

//variavel para interpretar  as funções do nosso contrato
var registerContract = web3.eth.contract(abi)
// irá me  irformar que foi efetuado o deploy do contrato onde seu hash é
var register = registerContract.at(endereco);  

//Declaro evento exitente no contrato
var registerEvent = register.myUser();


//Uso o Id(#) dos botões e campos para referenciar os valores inseridos 
$("#button1").click(function() {
$("#loader").show();
register.registerUser($("#fNome").val(), $("#fIdade").val(),$("#fCPF").val(),$("#fCargo").val(),$("#fHash").val(),function(error, result){
    if(!error){
		console.log("ok");
		$("#loader").hide();
        //O alerta aguarda até que esse evento seja emitido e o ative
        registerEvent.watch(function (err, result) {
            if (!err) {
                alert("cadastro efetuado com sucesso");
            } 
            });
	}	
	else{
		console.error(error);
		$("#loader").hide();
        alert("cadastro não efetuado");
    }
	});
});

$("#button2").click(function() {
    register.getUser($("#fID").val(),function(error, result){
    if(!error){
        $("#instructor").html(result);
        console.log(result);
    }
    else
        console.error(error);
    });
});