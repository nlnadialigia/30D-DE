const colors = ['roxo', 'azul', 'preto', 'vermelho']

colors.unshift('branco')

console.log(colors);
//Resposta: [ 'branco', 'roxo', 'azul', 'preto', 'vermelho' ]

colors.shift()

console.log(colors);
//Resposta: [ 'roxo', 'azul', 'preto', 'vermelho' ]