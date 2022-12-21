const listaLivros = require("./arrays");

function encontraMenores(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }
  trocaLugar(array, array.indexOf(pivo), menores);
  return array;
}

function trocaLugar(array, de, para) {
  const el1 = array[de];
  const el2 = array[para];

  array[para] = el1;
  array[de] = el2;
}

console.log(encontraMenores(listaLivros[2], listaLivros));
