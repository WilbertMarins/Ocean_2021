/*
 *      Copyright 2013  Samsung Electronics Co., Ltd
 *
 *      Licensed under the Flora License, Version 1.1 (the "License");
 *      you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *              http://floralicense.org/license/
 *
 *      Unless required by applicable law or agreed to in writing, software
 *      distributed under the License is distributed on an "AS IS" BASIS,
 *      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *      See the License for the specific language governing permissions and
 *      limitations under the License.
 */

var matA = new Array();
var matB = new Array();
var matResult = new Array();

window.onload = function() {
	
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 40: //DOWN arrow
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
    		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });
}

function createArray() {
    var matLength = parseInt(document.getElementById('length_btn').value);

    for (var i=0; i<matLength; i++) {
        matA[i] = new Array();
        matB[i] = new Array();
        matResult[i] = new Array();
    }

    for (var i=0; i<matLength; i++) {
        for (var j=0; j<matLength; j++) {
            matA[i][j] = Math.ceil(Math.random()*100-1);
            matB[i][j] = Math.ceil(Math.random()*100-1);
        }
    }
    NPRuntimeMatrix.setMatrixA(matA);
    NPRuntimeMatrix.setMatrixB(matB);

    document.getElementById('resultByJS_div').innerHTML = "Javascript : Calculating...";
    document.getElementById('resultByPlugin_div').innerHTML = "NPRuntime : Calculating...";
    setTimeout("getResult()", 10);
}

function getResult() {
    var before = new Date();
    for (var i=0; i<matA.length; i++) {
        for (var j=0; j<matA[i].length; j++) {
            var sum = 0;
            for (var k=0; k<matA[i].length; k++) {
                sum = sum + (matA[i][k] *matB[k][j]);
            }
            matResult[i][j] = sum;
        }
    }

    var after = new Date();
    document.getElementById('resultByJS_div').innerHTML = "Javascript : " + (after.getTime() - before.getTime()) + "ms";

    var beforeP = new Date();
    NPRuntimeMatrix.multiplication();
    var afterP = new Date();
    document.getElementById('resultByPlugin_div').innerHTML = "NPRuntime : " + (afterP.getTime() - beforeP.getTime()) + "ms";

    //document.getElementById('array1').innerHTML = "matA :<br>" + matA + "<br>";
    //document.getElementById('array2').innerHTML = "matB :<br>" + matB + "<br>";
    //document.getElementById('array3').innerHTML = "matResult JS :<br>" + matResult + "<br>";
    //document.getElementById('array4').innerHTML = "matResult Plugin :<br>" + NPRuntimeMatrix.getMatrixResult() + "<br>";

    document.getElementById('result_btn').style.display = "";
}

function resultFunction() {
    document.getElementById('resultByJS_div').innerHTML = "Javascript :";
    document.getElementById('resultByPlugin_div').innerHTML = "NPRuntime :";
    var inputValue =  parseInt(document.getElementById('length_btn').value);
    if( inputValue > 300 || inputValue < 100 || isNaN(inputValue)) {
        alert("input value 100 ~ 300");
        document.getElementById('length_btn').value = 100;
        return;
    }
    document.getElementById('result_btn').style.display = "none";
    document.getElementById('resultByJS_div').innerHTML = "Javascript : Creating matrix...";
    document.getElementById('resultByPlugin_div').innerHTML = "NPRuntime : Creating matrix...";
    setTimeout("createArray()", 10);
}
