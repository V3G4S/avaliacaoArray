// 1) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode
// montar seu sorvete com até 3 bolas (sabores).
// Criar um programa que simule esse sistema:
// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// == MENSAGENS e VALIDAÇÕES ==
// 1 -&gt; Sabor adicionado! OU Limite de sabores atingido, remova um sabor!
// 2 -&gt; Sabor removido! OU Não existem sabores adicionados!
// 3 -&gt; Camada 1 - Sabor X, Camada 2 - Sabor Y, etc. OU Seu sorvete não possui
// sabores!
// 4 -&gt; Pedido realizado! OU Adicione pelo menos um sabor!
// let sabor = []
// let opcao
// while(opcao != '4'){
//     opcao = prompt(`Bem vindo a sorveteria! O que deseja fazer?
//     1- Adicionar sabor
//     2- Remover sabor
//     3- Visualizar pedido
//     4- Finalizar (ou apenas clique com nenhum sabor para cancelar)
//     `)
//     switch (opcao){
//         case '1':
//             if(sabor.length < 3){
//                 for(let i = 0; i <=2; i++){
//                     sabor = prompt("Qual sabor deseja?")
//                 }
//             }else{
//                 alert("Limite atingido! Remova um sabor caso queira outro")}
//             break
//         case '2':
//             if(sabor.length != 0){
//                 sabor.pop(alert("Sabores removidos!"))
//             }else{
//                 alert("Não há sabores!")
//             }
//             break
//         case '3':
//             if(sabor.length = 0){
//                 alert(`Não existem sabores!`)
//             }else{
//                 alert(`Os sabores são: ${sabor[0]} na primeira camada`)
//                 alert(`${sabor[1]} na segunda camada`)
//                 alert(`${sabor[0]} na terceira camada`)
//             }
//             break
//         case '4':
//             if(sabor.length > 0){
//                 alert("Pedido efetuado!")
//             }else{
//                 alert("Cancelando...")
//             }
//     }  
// }
// Feita

// 2) Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba-
// o.
// Modifique os elementos do array de modo que a sequência de números fique do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1
// let num = []
// for(let i = 0; i < 3; i++){
// num.push(Number(prompt("Digite um número")))
// }
// num.reverse(num)
// alert(num)
// Feita

// 3) Calcular a soma dos números de um array
// let nums = []
// for(let i = 0; i <= 1; i++){
// nums[i] = Number(prompt("Digite um número"))
// }
// let result
// result = nums[0] + nums[1]
// alert(result)
// Feita

// 4) Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
// Matemática. Calcular a média de todas as notas acima de 5,0.
// let nomes = []
// let notas = []
// for(let i = 1; i <= 5; i++){
//     nomes.push(prompt("Digite o nome do aluno n°" + i))
//     notas.push(Number(prompt("Digite a nota do aluno n°" + i)))
// }
// let somaNotas = 0
// let contaNota = 0
// for(let i = 0; i < notas.length; i++){
//     if(notas[i] > 5){
//         somaNotas += notas[i]
//         contaNota++
//     }
// }
// let media = (somaNotas/contaNota).toFixed(2)
// alert(media)
// Feita

// 5) Localizar o maior valor dentro de um array de números
// let valor = [235, 451, 34, 29, 2121]
// let maior = 0
// let indiceMaior
// for(let i = 0; i < valor.length; i++){
//     if(valor[i] > maior){
//         maior = valor[i]
//         indiceMaior = i
//     }
// }
// console.log(valor[indiceMaior])
// Feita

// 6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
// Faça um código para copiar para o segundo Array, apenas os números ímpares existentes
// no primeiro Array.
// let nums1 = []
// for(let i = 0; i < 10; i++){
//     nums1.push(Number(prompt("Digite um número (10x)")))
// }
// let nums2 = []
// for(let i = 0; i < nums1.length; i++){
//     if(nums1[i] % 2 != 0){
//         nums2.push(nums1[i])
//     }
// }
// alert(nums2)
// Feita