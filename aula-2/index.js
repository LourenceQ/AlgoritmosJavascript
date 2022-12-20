const { edGalho, edFolha } = require('./arrays');

// console.log(edFolha);
// console.log(edGalho);

function mergeSort(array) {
  if (array.length > 1) {
    const meio = Math.florr(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio));
    const parte2 = mergeSort(array.slice(meio, array.length));
    array = ordena(parte1, parte2);
  }

  return array;
}

function ordena(parte1, parte2) {
  let idx1 = 0;
  let idx2 = 0;
  const res = [];

  while (idx1 < parte1.length && idx2 < parte2.length) {
    let item1 = parte1[idx1];
    let item2 = parte2[idx2];

    if (item1.preco < item2.preco) {
      res.push(item1);
      item1++;
    } else {
        res.push(item2);
        item2++;
    }
  }
console.log(item1);
console.log(item2);

  return res.concat(item1<part1.length 
    ? parte1.slice(item1) 
    : parte2.slice(item2));
}

console.log(juntaListas(edGalho, edFolha))