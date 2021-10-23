  var diceM17 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 4; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 100;
      return randomNumber;
    }
  }
  
  var diceE17 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 6; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 100;
      return randomNumber;
    }
  }

  var diceL17 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 8; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 100;
      return randomNumber;
    }
  }
  
  
  var bMortal17 = document.getElementById('mortal17');
  var bEpico17 = document.getElementById('epico17');
  var bLendario17 = document.getElementById('lendario17');

  bMortal17.onclick = function() {
    dragoes = diceM17.roll();
    printNumber(dragoes);
    var quantidadeItens = Math.floor(Math.random() * 6) + 1;
    printItens(`${quantidadeItens} itens da tabela E`);

    relatorio.hidden = true;
    clear();
    for(let c = 0; c < quantidadeItens-1; c++){
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}, `);
    }
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}.`)
        gerar.disable = false;
        gerar.style.cursor = "pointer";
        gerar.style.backgroundColor = "#ec7e16";
  }

  bEpico17.onclick = function() {
    dragoes = diceE17.roll();
    printNumber(dragoes);
    var quantidadeItens = Math.floor(Math.random() * 6) + 1;
    printItens(`${quantidadeItens} itens da tabela F`);

    relatorio.hidden = true;
    clear();
    for(let c = 0; c < quantidadeItens-1; c++){
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}, `);
    }
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}.`)
        gerar.disable = false;
        gerar.style.cursor = "pointer";
        gerar.style.backgroundColor = "#ec7e16";
  }

  bLendario17.onclick = function() {
    dragoes = diceL17.roll();
    printNumber(dragoes);
    var quantidadeItens = Math.floor(Math.random() * 6) + 1;
    printItens(`${quantidadeItens} itens da tabela G`);

    relatorio.hidden = true;
    clear();
    for(let c = 0; c < quantidadeItens-1; c++){
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}, `);
    }
        var d100 = Math.floor(Math.random() * 100) + 1;
        printD100(`${d100}.`)
        gerar.disable = false;
        gerar.style.cursor = "pointer";
        gerar.style.backgroundColor = "#ec7e16";
  }