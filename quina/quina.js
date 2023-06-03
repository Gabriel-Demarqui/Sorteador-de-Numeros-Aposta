let caixa1 = document.querySelector('.caixa1')
let caixa2 = document.querySelector('.caixa2')
let caixa3 = document.querySelector('.caixa3')
let caixa4 = document.querySelector('.caixa4')
let caixa5 = document.querySelector('.caixa5')

function sortearNumero() {
    var numerosSorteados = [];
    
    while (numerosSorteados.length < 5) {
      var numero = Math.floor(Math.random() * 80) + 1;
      
      if (numerosSorteados.indexOf(numero) === -1) {
        numerosSorteados.push(numero);
      }
    }

    numerosSorteados.sort(function(a, b) {
      return a - b;
    });
    
    return numerosSorteados;  
}

function sortear() {

    var numerosSorteados = sortearNumero();
    caixa1.innerHTML = numerosSorteados[0]
    caixa2.innerHTML = numerosSorteados[1]
    caixa3.innerHTML = numerosSorteados[2]
    caixa4.innerHTML = numerosSorteados[3]
    caixa5.innerHTML = numerosSorteados[4]
}

  
  