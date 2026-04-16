const prompt = require("prompt-sync")()

console.log("===== MENU DE EXERCÍCIOS =====")
console.log("1 - Contar até 100")
console.log("2 - Contar de 2 em 2")
console.log("3 - Contagem regressiva")
console.log("4 - Tabuada inteligente")
console.log("5 - Sair")

let opcao = Number(prompt("Escolha uma opção: "))

switch(opcao){

    case 1:
        console.log("\nContando até 100")
        for(let i = 1; i <= 100; i++){
            console.log(i)
        }
    break

    case 2:
        console.log("\nContando de 2 em 2")
        for(let i = 0; i <= 20; i += 2){
            console.log(i)
        }
    break

    case 3:
        console.log("\nContagem regressiva")
        for(let i = 10; i >= 0; i--){
            console.log(i)
        }
    break

    case 4:
        let numero = Number(prompt("Digite um número: "))

        if(numero % 2 == 0){
            console.log("\nTabuada Decrescente (Número Par)")
            for(let i = 10; i >= 1; i--){
                console.log(numero + " x " + i + " = " + (numero * i))
            }
        } else {
            console.log("\nTabuada Crescente (Número Ímpar)")
            for(let i = 1; i <= 10; i++){
                console.log(numero + " x " + i + " = " + (numero * i))
            }
        }

    break

    case 5:
        console.log("Encerrando programa...")
    break

    default:
        console.log("Opção inválida")

}
