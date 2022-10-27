/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia; */

const arrayNumero = [45, 6, 77, 8, 9]
const arrayString = ["samuca", "carlão", "italo do funk"]
const arraySortido = [22, "ruanzito", true ]

const copiaArrayNumero = arrayNumero.slice()
const copiaArrayString = arrayString.slice()
const copiaArraySortido = arraySortido.slice()

copiaArrayNumero.unshift(22)
copiaArrayString.pop()
copiaArraySortido.splice(1, 1)

console.log(arrayNumero, copiaArrayNumero)
console.log(arrayString, copiaArrayString)
console.log(arraySortido, copiaArraySortido)