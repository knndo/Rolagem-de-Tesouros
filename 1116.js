  var diceM11 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 4; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 50;
      return randomNumber;
    }
  }
  
  var diceE11 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 6; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 50;
      return randomNumber;
    }
  }

  var diceL11 = {
    sides: 6,
    roll: function () {
      var randomNumber = 0;
      var i;
      for (i = 0; i < 8; i++){
        randomNumber += Math.floor(Math.random() * this.sides) + 1;
      }
      randomNumber *= 50;
      return randomNumber;
    }
  }

  function clear(){
    var dadosItens = document.getElementById('paraItens');
    dadosItens.innerHTML = " ";
  }

  function printD100(d100){
    var dadosItens = document.getElementById('paraItens');
    dadosItens.innerHTML += d100;
  }

  function printNumber(dragoes) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = dragoes;
  }
  
  function printItens(quantidadeItens){
    var paraTabela = document.getElementById('paraTabela');
    paraTabela.innerHTML = quantidadeItens;
  }
  
  var bMortal11 = document.getElementById('mortal11');
  var bEpico11 = document.getElementById('epico11');
  var bLendario11 = document.getElementById('lendario11');

  bMortal11.onclick = function() {
    dragoes = diceM11.roll()
    printNumber(dragoes);
    
    var quantidadeItens = Math.floor(Math.random() * 6) + 1;
    printItens(`${quantidadeItens} itens da tabela C`);

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

  bEpico11.onclick = function() {
    dragoes = diceE11.roll();
    printNumber(dragoes);

    var quantidadeItens = Math.floor(Math.random() * 4) + 1;
    printItens(`${quantidadeItens} itens da tabela D`);
    
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
  

  bLendario11.onclick = function() {
    dragoes = diceL11.roll();
    printNumber(dragoes);

    var quantidadeItens = Math.floor(Math.random() * 6) + 1;
    printItens(`${quantidadeItens} itens da tabela D`);

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