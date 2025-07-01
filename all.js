let list = ['ola','eu','a']
list[5] = 'b'

// for ( variavel ) in 
// note que a variavel será o indice no iteravel

for (i in list){
    console.log(i)
}
console.log('\n')
console.log('--------------------')
console.log('\n')




// for of
// note que a variavel será o elemento no iteravel, podendo ser undefined
for (i of list){
    console.log(i)
}


// forreach -> Percorre o array semelhante a forma que o for of faz

let myList = [1,2,3,4,5,6,7,8,9,10]
myList.forEach((number,i,array)=>{

    console.log('Estou percorrendo o array ['+ array+ "]" + "\n" + "no index " + i + "\n" + "e sou " + number)

})




// map
// Considere o seguinte array

myList = [1,2,3,4,5,6,7,8,9,10]

// Usamos o map para criar um novo array com base em um ja existente
console.log(myList)
console.log(myList.map((i)=> i))

// note que por enquanto so usamos isso para copiar um array mas...

let myListwIndex = myList.map((number,i) => number+i)
console.log(myListwIndex)

// Nesse comando criamos uma nova lista com a função de que cada item dessa nova lista
// será o item do 'myList' + o seu index

// Filter -> filtra determinado array com base no que voce quer

let myListFiltered = myList.filter((i) => i != 9)
console.log(myListFiltered)

console.log(myList.reduce((number,i) => number+i))


// for of em Strings

// Supondo que...

let aluno = "joao"

for (a of aluno){
    console.log(a)
}

// O for of em strings itera sobre ela pegando cada caracter

// podemos utilizar para simples criptografias / sifras
let meuNomeSifrado = ""
const minhaSifra = (caractere,nome) =>{
    console.log(caractere)
    switch(caractere){
        case "j":
            return nome + "!"
            console.log(nome)
            break
        case "o":
            return nome + "]"
            break
        case "a":
            return nome + "@"
            break
        default:
            return nome + "^"
            break            
    }


}

for (caractere of aluno){
    meuNomeSifrado = minhaSifra(caractere,meuNomeSifrado)
}

console.log(meuNomeSifrado)


// Map , Set

// Maps -> Estrutura similar aos dicionarios e python, chave e valor

let meuMap = new Map()

meuMap.set(1,"joao")

console.log(meuMap)

// "Mas os objetos em javascript ja não fazem isso praticamente?"
// Mais ou menos, em um objeto js você so pode armazenar atributos de valores string mas como voce pôde ver
// em maps podemos armazenar chaves de qualquer valor
// E também podemos iterar sobre ele

meuMap.set(2,"ale")
meuMap.set(3,"isaque")

for ([chave,valor] of meuMap){
    console.log(`Minha chave é ${chave} e o valor é ${valor} `)
}

// Set -> um conjunto (lista) que ignora duplicatas
// Supondo...

let meuset = new Set([1,2,3,4,5,5,7,1,2,2,2,1])

for(num of meuset){
    console.log(num)
}


// Mas, se em java, c, c# etc os arrays, listas, vetores ou outro nome que você queira chamar são bem mais complexos e tipados
// por que em js não?
// Esse é um dos principais motivos 

let minhaLista = []
console.log(typeof minhaLista)

console.log(minhaLista instanceof Array )
console.log( Array instanceof Object)


// Então um array é uma instancia de Object
// E minhalista é uma instancia de array