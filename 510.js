  var diceM5 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 4; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 30;
      return randomNumber;
    }
  }
  
  var diceE5 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 6; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 30;
      return randomNumber;
    }
  }

  var diceL5 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 8; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 30;
      return randomNumber;
    }
  }
  
  var bMortal5 = document.getElementById('mortal5');
  var bEpico5 = document.getElementById('epico5');
  var bLendario5 = document.getElementById('lendario5');

  bMortal5.onclick = function() {
    dragoes = diceM5.roll();
    printDragoes(dragoes);

    var quantidadeItens = Math.floor(Math.random() * 4) + 1;
    printItens(`${quantidadeItens} itens da tabela A`);
    
    relatorio.hidden = true;
    clear();
    for(let c = 0; c < quantidadeItens-1; c++){
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}, `);
    }
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}.`);
        gerar.disabled = false;
        gerar.style.cursor = "pointer";
        gerar.style.backgroundColor = "#ec7e16";
  }

  bEpico5.onclick = function() {
    dragoes = diceE5.roll();
    printDragoes(dragoes);

    var quantidadeItens = Math.floor(Math.random() * 4) + 1;
    printItens(`${quantidadeItens} itens da tabela B`);

    relatorio.hidden = true;
    clear();
    for(let c = 0; c < quantidadeItens-1; c++){
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}, `);
    }
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}.`)
        gerar.disabled = false;
        gerar.style.cursor = "pointer";
        gerar.style.backgroundColor = "#ec7e16";
  }

  bLendario5.onclick = function() {
    dragoes = diceL5.roll();
    printDragoes(dragoes);
    
    var quantidadeItens = Math.floor(Math.random() * 4) + 1;
    printItens(`${quantidadeItens} itens da tabela C`);
    
    relatorio.hidden = true;
    clear();
    for(let c = 0; c < quantidadeItens-1; c++){
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}, `);
    }
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}.`)
        gerar.disabled = false;
        gerar.style.cursor = "pointer";
        gerar.style.backgroundColor = "#ec7e16";
  }
