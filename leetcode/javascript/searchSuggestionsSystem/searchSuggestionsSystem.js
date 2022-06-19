/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let output = Array.from({ length: searchWord.length }, () => []);

  products.sort();

  for (let i = 0; i < searchWord.length; i++) {
    let regWord = new RegExp(searchWord.slice(0, i + 1));

    products.filter((product) => {
      if (product.match(regWord)) {
        if (product.match(regWord).index === 0 && output[i].length < 3)
          output[i].push(product);
      }
    });
  }

  return output;
};
