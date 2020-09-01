
// Função que adiciona os números no viewfinder quando pressionado os botões
function calcNum(num) {
    if (typeof viewfinder == 'undefined') {
       document.calcform.viewfinder.value = '';
    }
    document.calcform.viewfinder.value = document.calcform.viewfinder.value + num;
    viewfinder = 1;
 }
 
 // Função que limpa a calculadora e todas as variáveis existentes.
 function calcClean() {
    document.calcform.viewfinder.value = '';
    delete gvalue;
    delete goper;
    delete viewfinder;
 }
 
 // Função que executa as operações básicas da calculadora
 function calcOper(oper, value1, value2) {
    if (oper == "sum") {
       var value = parseFloat(value1) + parseFloat(value2);
    } else {
       if (oper == "subtract") {
          var value = value1 - value2;
       } else {
          if (oper == "multiply") {
             var value = value1 * value2;
          } else {
             var value = value1 / value2;
          }
       }
    }
 
    return(value);
 }
 
 // Função do algoritmo de "passagem" das ações do usuário
 function calcParse(oper) {
    var value = document.calcform.viewfinder.value;
    delete viewfinder;
 
    if (typeof goper != 'undefined' && oper == 'result') {
       gvalue = calcOper(goper, gvalue, value);
       document.calcform.viewfinder.value = gvalue;
       delete oper;
       delete gvalue;
       return(0);
    }
 
    if (typeof gvalue != 'undefined') {
       gvalue = calcOper(goper, gvalue, value);
       goper = oper;
       document.calcform.viewfinder.value = gvalue;
    } else {
       gvalue = value;
       goper = oper;
    }
 
 }