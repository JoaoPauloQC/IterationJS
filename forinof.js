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
