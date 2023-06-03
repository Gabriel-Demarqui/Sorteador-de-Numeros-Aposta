let caixa1 = document.querySelector('.caixa1')
let caixa2 = document.querySelector('.caixa2')
let caixa3 = document.querySelector('.caixa3')
let caixa4 = document.querySelector('.caixa4')
let caixa5 = document.querySelector('.caixa5')
let caixa6 = document.querySelector('.caixa6')
let caixa7 = document.querySelector('.caixa7')
let caixa8 = document.querySelector('.caixa8')
let caixa9 = document.querySelector('.caixa9')
let caixa10 = document.querySelector('.caixa10')
let caixa11 = document.querySelector('.caixa11')
let caixa12 = document.querySelector('.caixa12')
let caixa13 = document.querySelector('.caixa13')
let caixa14 = document.querySelector('.caixa14')
let caixa15 = document.querySelector('.caixa15')

function sortearNumero() {
    var numerosSorteados = [];
    
    while (numerosSorteados.length < 15) {
      var numero = Math.floor(Math.random() * 25) + 1;
      
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
    caixa6.innerHTML = numerosSorteados[5]
    caixa7.innerHTML = numerosSorteados[6]
    caixa8.innerHTML = numerosSorteados[7]
    caixa9.innerHTML = numerosSorteados[8]
    caixa10.innerHTML = numerosSorteados[9]
    caixa11.innerHTML = numerosSorteados[10]
    caixa12.innerHTML = numerosSorteados[11]
    caixa13.innerHTML = numerosSorteados[12]
    caixa14.innerHTML = numerosSorteados[13]
    caixa15.innerHTML = numerosSorteados[14]
}

  
  