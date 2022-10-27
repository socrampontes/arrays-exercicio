/* - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.  */

const numero = [45, 6, 77, 8, 9]
const string = ["samuca", "carlão", "italo do funk"]
const sortido = [22, "ruanzito", true ]

console.log(numero.length)
console.log(string.length)
console.log(sortido.length)

console.log(numero[0])
console.log(string[1])
console.log(sortido[2])

console.log(numero.includes(45))
console.log(sortido.includes(45))
