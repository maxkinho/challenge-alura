var input1 = document.querySelector('textarea#txt-area1');
var input2 = document.querySelector('textarea#txt-area2');

var button1 = document.querySelector('button.btn-1');
button1.onclick = cripton;

var button2 = document.querySelector('button.btn-2');
button2.onclick = criptoff;

var button3 = document.querySelector('button.btn-3');
button3.onclick = copiar;

document.getElementById('not').innerHTML = '';
input1.focus();
function cripton() {
    
    if (input1.value.length == 0) {
        document.getElementById('not').innerHTML = '<h2 id="not">Nenhuma mensagem encontrada</h2>';
        input1.focus();
    } else {
        document.getElementById('not').innerHTML = '';
        
        var text = input1.value;
        var txt =  text.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('txt-area2').innerHTML = `${txt}`;
       
    }
}
function criptoff() {
    if (input1.value.length == 0) {
        document.getElementById('not').innerHTML = ' <h2 id="not">Nenhuma mensagem encontrada</h2>';
        input1.focus();
    } else {
        document.getElementById('not').innerHTML = '';
        document.getElementById('txt-area1').innerHTML = '';
 
        var text = input1.value;
        var txt =  text.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
        
        document.getElementById('txt-area2').innerHTML = `${txt}`;  
    }
}

function copiar() {
    document.querySelector('#txt-area2').select();
    document.execCommand('copy');
    alert("O texto copiado já está na área de transferência!");
    document.querySelector("#txt-area1").value = "";
}