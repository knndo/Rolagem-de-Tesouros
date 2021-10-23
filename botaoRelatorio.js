 
    gerar.onclick = function(){
        relatorio.hidden = false;
        relatorio.innerHTML = (`
        Missão: </br>
        Itens: </br>
        Tesouro dividido</br>
        Para 4: ${Math.floor(dragoes/4)} </br>
        Para 5: ${Math.floor(dragoes/5)} </br>
        Para 6: ${Math.floor(dragoes/6)}
        `);
    }
