const prompt = require('prompt-sync')();

// //Atividade 1:
// let cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia?")); 
// let anosFumando = parseInt(prompt("Há quantos anos você fuma?")); 

// const minutosPerdidosPorCigarro = 10; 
// const cigarrosFumadosTotal = cigarrosPorDia * 365 * anosFumando;
// const minutosPerdidosTotal = cigarrosFumadosTotal * minutosPerdidosPorCigarro; 
// const diasPerdidos = minutosPerdidosTotal / (24 * 60);

// console.log(`Você perderá aproximadamente ${diasPerdidos.toFixed(1)} dias de vida por fumar.`); 



// //Atividade 2:   
// let velocidade = parseFloat(prompt("Qual é a velocidade do carro em Km/h?"));
// const velocidadeLimite = 80;
// const valorPorKmAcima = 5; 

// if (velocidade > velocidadeLimite) { 
//     const kmAcima = velocidade - velocidadeLimite;
//     const valorMulta = kmAcima * valorPorKmAcima; 
//     console.log(`Você foi multado por ultrapassar o limite de velocidade.`); 
//     console.log(`Valor da multa: R$${valorMulta.toFixed(2)}`); 
// } else { 
//     console.log(`Velocidade dentro do limite permitido.`); 
// };



// //Atividade 3:
// const distancia = parseFloat(prompt("Qual é a distância que você deseja percorrer em Km?"));

// const precoAte200Km = 0.50;
// const precoMaisLonga = 0.45;
// let precoTotal;

// if (distancia <= 200) {
//     precoTotal = distancia * precoAte200Km; 
// } else {
//     precoTotal = distancia * precoMaisLonga; 
// } 
// console.log(`O preço da passagem é R$${precoTotal.toFixed(2)}`);



// //Atividade 4:
// let reta1 = parseInt(prompt("Insira o primeiro seguimento: "));
// let reta2 = parseInt(prompt("Insira o segundo seguimento: "));
// let reta3 = parseInt(prompt("Insira o terceiro seguimento: "));
// if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2){
//     console.log("É possível formar um triangulo")        
// } else {
//     console.log("Não é possivel formar um triangulo");
// };



//Atividade 5:
// const escolhaDoJogador = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();

// if (escolhaDoJogador === "pedra" || escolhaDoJogador === "papel" || escolhaDoJogador === "tesoura") {
//     const opcoes = ["pedra", "papel", "tesoura"];
//     const escolhaDoComputador = opcoes[Math.floor(Math.random() * 3)];
    
//     console.log("Você escolheu:", escolhaDoJogador);
//     console.log("O computador escolheu:", escolhaDoComputador);
    
//     if (escolhaDoJogador === escolhaDoComputador) {
//         console.log("Empate!");
//     } else if ( (escolhaDoJogador === "pedra" && escolhaDoComputador === "tesoura") || (escolhaDoJogador === "papel" && escolhaDoComputador === "pedra") || (escolhaDoJogador === "tesoura" && escolhaDoComputador === "papel") ) {
//         console.log("Você ganhou!");
//     } else { 
//         console.log("Você perdeu!"); 
//     } 
// } else {
//     console.log("Escolha inválida. Por favor, escolha pedra, papel ou tesoura."); 
// } 



// //Atividade 6:
// function joguinho() {
//     const numSorteado = Math.floor(Math.random() * 5) + 1;
//     let tentativas = 3;
    
//     console.log("Adivinhe o numero de 1 a 5. Você tem 3 tentativas para adivinhar!");
    
//     while (tentativas > 0) {
//         const palpite = parseInt(prompt("Digite seu palpite (um número entre 1 e 5): "));
//         if (palpite >= 1 && palpite <= 5) {
//             if (palpite === numSorteado) {
//                 console.log("Parabéns! Você acertou o número sorteado: ", numSorteado);
//                 return; 
//             } else {
//                 console.log("Palpite errado. Tente novamente.");
//                 tentativas--;
//                 console.log("Tentativas restantes: ", tentativas);
//             } 
//         } else {
//             console.log("Por favor, digite um número válido entre 1 e 5.");
//         }
//     } 
//     console.log("Você usou todas as tentativas. O número sorteado era: ", numSorteado); 
// }
// joguinho();



// //Atividade 7:
// const tipoCarro = prompt("Digite o tipo de carro alugado (popular ou luxo):").toLowerCase();
// const diasAluguel = parseInt(prompt("Quantos dias de aluguel?"));
// const kmPercorridos = parseInt(prompt("Quantos Km foram percorridos?"));

// function calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
//     let precoBase;
//     let precoPorKm;

//     if (tipoCarro === "popular") {
//         precoBase = 90 * diasAluguel;
//         if (kmPercorridos <= 100) {
//             precoPorKm = kmPercorridos * 0.20;
//         } else {
//             precoPorKm = (100 * 0.20) + ((kmPercorridos - 100) * 0.10);
//         }
//     } else if (tipoCarro === "luxo") {
//         precoBase = 150 * diasAluguel;
//         if (kmPercorridos <= 200) {
//             precoPorKm = kmPercorridos * 0.30;
//         } else {
//             precoPorKm = (200 * 0.30) + ((kmPercorridos - 200) * 0.25);
//         }
//     } else {
//         return "Tipo de carro inválido.";
//     }
//     const precoTotal = precoBase + precoPorKm;
//     return precoTotal.toFixed(2);
// }
// const precoTotal = calcularPrecoAluguel(tipoCarro, diasAluguel, kmPercorridos);
// console.log("O preço total a ser pago é: R$", precoTotal);



// //Atividade 8:
// const horasAtividade = parseInt(prompt("Quantas horas de atividade física você teve este mês?"));

// function calcularPontosEValor(horasAtividade) {
//     let pontos;
//     let valor;

//     if (horasAtividade <= 10) {
//         pontos = horasAtividade * 2;
//     } else if (horasAtividade <= 20) {
//         pontos = 10 * 2 + (horasAtividade - 10) * 5;
//     } else {
//         pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
//     }

//     valor = pontos * 0.05;

//     return { pontos, valor };
// }
// const { pontos, valor } = calcularPontosEValor(horasAtividade);
// console.log(`Você acumulou ${pontos} pontos.`);
// console.log(`Você ganhou R$ ${valor.toFixed(2)} por suas atividades físicas.`);



// //Atividade 9:
// function calcularTotalSalarioPorSexo() {
//     let totalM = 0;
//     let totalF = 0;
//     while (true) {
//         const salario = parseFloat(prompt("Digite o salário do funcionário: "));
//         const sexo = prompt("Digite o sexo do funcionário(m= masculino/f= feminino): ");
//         if (sexo === "m") {
//             totalM += salario;
//         } else if (sexo === "f") {
//             totalF += salario;
//         } else {
//             console.log("Sexo inválido!!");
//         }
//         const continuar = prompt("Deseja continuar?(s= sim / n= não) ");
//         if (continuar !== "s") {
//             break;
//         }
//     }
//     return { totalM, totalF };
// }
// const { totalM, totalF } = calcularTotalSalarioPorSexo();
// console.log("Total de salários pagos aos homens:", totalM.toFixed(2));
// console.log("Total de salários pagos às mulheres:", totalF.toFixed(2));



// //Atividade 10:
// let continuar;
// let soma = 0;
// let menorValor = 0;
// let quantidadeNumeros = 0;
// let quantidadePares = 0;

// do {
//     const numero = parseFloat(prompt("Digite um número:"));
//     soma += numero;

//     if (numero < menorValor) {
//         menorValor = numero;
//     }
//     if (numero % 2 === 0) {
//         quantidadePares++;
//     }
//     quantidadeNumeros++;

//     continuar = prompt("Deseja continuar? (S para sim, qualquer outra tecla para não)").toUpperCase();
// } while (continuar === "S");
// const media = soma / quantidadeNumeros;

// console.log("Somatório de todos os valores: ", soma.toFixed(2));
// console.log("Menor valor digitado: ", menorValor.toFixed(2));
// console.log("Média entre todos os valores: ", media.toFixed(2));
// console.log("Quantidade de valores pares: ", quantidadePares);



// //Atividade 11:
// const primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
// const razao = parseInt(prompt("Digite a razão da PA: "));
// function calcularPA(primeiroTermo, razao) {
//     const pa = [];
//     let soma = 0;
//     for (let i = 0; i < 10; i++) {
//         const termo = primeiroTermo + (i * razao);
//         pa.push(termo);
//         soma += termo;
//     }
//     return { pa, soma };
// }
// const { pa, soma } = calcularPA(primeiroTermo, razao);
// console.log("Os 10 primeiros elementos da PA são: ", pa);
// console.log("A soma de todos os valores da sequência é :", soma);



// //Atividade 12:
// const seqFibonacci = fibonacci(10);
// function fibonacci(n) {
//     const seq = [1, 1];
//     for (let i = 2; i < n; i++) {
//         seq[i] = seq[i - 1] + seq[i - 2];
//     }
//     return seq.slice(0, n);
// }
// console.log("Os 10 primeiros elementos da Sequência de Fibonacci são: ", seqFibonacci.join(", "));



// //Atividade 13:
// const tamanhoVetor = 15;
// const vetorFibonacci = preencherFibonacci(tamanhoVetor);
// function preencherFibonacci(n) {
//     const sequencia = [1, 1];
//     for (let i = 2; i < n; i++) {
//         sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
//     }
//     return sequencia;
// }
// console.log("Os primeiros 15 elementos da sequência de Fibonacci são: ", vetorFibonacci);



// //Atividade 14:
// const nomes = [];
// for (let i = 0; i < 7; i++) {
//     const nome = prompt("Digite um nome:");
//     nomes.push(nome);
// }

// for (let i = nomes.length - 1; i >= 0; i--) {
//     console.log(nomes[i]);
// }



// //Atividade 15:
// const numeros = [];
// const pares = [];
// for (let i = 0; i < 10; i++) {
//     const numero = parseInt(prompt("Digite um número: "));
//     numeros.push(numero);
// }

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         pares.push({ numero: numeros[i], posicao: i });
//     }
// }
// if (pares.length === 0) {
//     console.log("Nenhum número par foi digitado.");
// } else {
//     console.log("Números pares digitados e suas posições: ");
//     for (let i = 0; i < pares.length; i++) {
//         console.log(`Número ${pares[i].numero} na posição ${pares[i].posicao}`);
//     }
// }



// //Atividade 16:
// const tamVetor = 20;
// function criadorAleatorio(tamanho) {
//     const vetor = [];
//     for (let i = 0; i < tamanho; i++) {
//         vetor.push(Math.floor(Math.random() * 100));
//     }
//     return vetor;
// }


// function exibirVetor(vetor) {
//     console.log("Números gerados: ");
//     console.log(vetor.join(", "));
// }
// function ordenarVetor(vetor) {
//     return vetor.slice().sort((a, b) => a - b);
// }

// const vetorAleatorio = criadorAleatorio(tamVetor);
// exibirVetor(vetorAleatorio);
// const vetorOrdenado = ordenarVetor(vetorAleatorio);
// console.log("Números ordenados: ");
// console.log(vetorOrdenado.join(", "));



// //Atividade 17:
// const nomes = [];
// const idades = [];

// for (let i = 0; i < 9; i++) {
//     const nome = prompt("Digite o nome da pessoa: ");
//     const idade = parseInt(prompt("Digite a idade dela(e): "));
//     nomes.push(nome);
//     idades.push(idade);
// }
// console.log("São menores de idade: ");
// for (let i = 0; i < idades.length; i++) {
//     if (idades[i] < 18) {
//         console.log(`${nomes[i]} - ${idades[i]} anos`);
//     }
// }



// //Atividade 18:
// const registroFuncionario = {
//     nome: "",
//     cargo: "",
//     salario: 0
// };
// function preencher(nome, cargo, salario) {
//     registroFuncionario.nome = nome;
//     registroFuncionario.cargo = cargo;
//     registroFuncionario.salario = salario;
// }
// function exibir() {
//     console.log("Registro do Funcionário:");
//     console.log("Nome:", registroFuncionario.nome);
//     console.log("Cargo:", registroFuncionario.cargo);
//     console.log("Salário:", registroFuncionario.salario);
// }
// preencher("Renata Garcia", "Eng. de Software", 6000);
// exibir();



// //Atividade 19:
// const horarios = [];
// function validarHorario(horario) {
//     const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
//     return regex.test(horario);
// }
// function lerHorario(numero) {
//     let horario;
//     do {
//         horario = prompt("Digite um horário: ");
//         if (!validarHorario(horario)) {
//             console.log("Horário inválido. Por favor, digite no formato HH:MM:SS.");
//         }
//     } while (!validarHorario(horario));
//     return horario;
// }    
// for (let i = 1; i <= 5; i++) {
//     const horario = lerHorario(i);
//     horarios.push(horario);
// }
// console.log("Horários informados: ");
// horarios.forEach((horario, index) => {
//     console.log(`${index + 1}: ${horario}`);
// });


// //Atividade 20:
// function calcularINSS(salarioBruto) {
//     if (salarioBruto > 1500) {
//         return salarioBruto * 0.12;
//     } else {
//         return 180;
//     }
// }
// function calcSalario(salarioBruto, deducaoINSS) {
//     return salarioBruto - deducaoINSS;
// }
// function processarContracheque(matricula, nome, salarioBruto) {
//     const deducaoINSS = calcularINSS(salarioBruto);
//     const salarioLiquido = calcSalario(salarioBruto, deducaoINSS);

//     console.log("Matrícula:", matricula);
//     console.log("Nome:", nome);
//     console.log("Salário bruto:", salarioBruto.toFixed(2));
//     console.log("Dedução INSS:", deducaoINSS.toFixed(2));
//     console.log("Salário líquido:", salarioLiquido.toFixed(2));
// }

// processarContracheque(1, "Renata", 6500);



// //Atividade 21:
// function calcularPesoIdeal(altura, sexo) {
//     let pesoIdeal;
//     if (sexo.toLowerCase() === "masculino") {
//         pesoIdeal = 72.7 * altura - 58;
//     } else if (sexo.toLowerCase() === "feminino") {
//         pesoIdeal = 62.1 * altura - 44.7;
//     } else {
//         return "Sexo inválido. Por favor, informe 'masculino' ou 'feminino'.";
//     }
//     return pesoIdeal;
// }
// const altura = 1.63;
// const sexo = "feminino";
// const pesoIdeal = calcularPesoIdeal(altura, sexo);
// console.log("O peso ideal é:", pesoIdeal.toFixed(2), "kg");



// //Atividade 22:
// function calcularEstatisticasPopulacao() {
//     let totalSalario = 0;
//     let totalFilhos = 0;
//     let maiorSalario = 0;
//     let totalPessoas = 0;
//     let salarioAte350 = 0;
//     while (true) {
//         const salario = parseFloat(prompt("Digite o salário da pessoa (ou digite '0' para encerrar):"));
//         if (salario === 0) {
//             break;
//         }

//         const numFilhos = parseInt(prompt("Digite o número de filhos da pessoa: "));

//         totalSalario += salario;
//         totalFilhos += numFilhos;
//         totalPessoas++;

//         if (salario > maiorSalario) {
//             maiorSalario = salario;
//         }

//         if (salario <= 350) {
//             salarioAte350++;
//         }
//     }

//     const mediaSalario = totalSalario / totalPessoas;
//     const mediaFilhos = totalFilhos / totalPessoas;
//     const percentualSalarioAte350 = (salarioAte350 / totalPessoas) * 100;

//     return {
//         mediaSalario,
//         mediaFilhos,
//         maiorSalario,
//         percentualSalarioAte350
//     };
// }
// const estatisticas = calcularEstatisticasPopulacao();
// console.log("Média de salário da população: ", estatisticas.mediaSalario.toFixed(2));
// console.log("Média do número de filhos: ", estatisticas.mediaFilhos.toFixed(2));
// console.log("Maior salário: ", estatisticas.maiorSalario.toFixed(2));
// console.log("Percentual de pessoas com salário até R$350,00: ", estatisticas.percentualSalarioAte350.toFixed(2), "%");



// //Atividade 23:
// const matrizIdentidade = [];
// for (let i = 0; i < 7; i++) {
//     matrizIdentidade[i] = [];
//     for (let j = 0; j < 7; j++) {
//         if (i === j) {
//             matrizIdentidade[i][j] = 1;
//         } else {
//             matrizIdentidade[i][j] = 0;
//         }
//     }
// }
// for (let i = 0; i < 7; i++) {
//     console.log(matrizIdentidade[i].join(" "));
// }



// //Atividade 24:
// const M = [
//     [2, -5, 3, -7, 8, -4, 0, 1],
//     [-1, 6, -2, 4, 9, -3, -5, 7],
//     [0, 3, 5, -6, -2, 1, 4, -9],
//     [8, -4, -2, 1, 7, 0, -3, 6],
//     [4, 7, 2, 0, -1, -8, 5, 3],
//     [-3, 0, 1, 6, -4, 2, -7, 8]
// ];

// const C = [];

// for (let i = 0; i < M.length; i++) {
//     let count = 0;
//     for (let j = 0; j < M[i].length; j++) {
//         if (M[i][j] < 0) {
//             count++;
//         }
//     }
//     C.push(count);
// }
// console.log(C);



//Atividade 25:
function criarMatrizAleatoria(numLinhas, numColunas) {
    const matriz = [];
    for (let i = 0; i < numLinhas; i++) {
        const linha = [];
        for (let j = 0; j < numColunas; j++) {
            linha.push(Math.floor(Math.random() * 10) + 1);
        }
        matriz.push(linha);
    }
    return matriz;
}
function calcularSomaColunas(matriz) {
    const numLinhas = matriz.length;
    const numColunas = matriz[0].length;
    const somaColunas = [];

    for (let j = 0; j < numColunas; j++) {
        somaColunas[j] = 0;
    }
    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < numColunas; j++) {
            somaColunas[j] += matriz[i][j];
        }
    }
    return somaColunas;
}
function imprimirSomaColunas(somaColunas) {
    for (let j = 0; j < somaColunas.length; j++) {
        console.log(`Soma da coluna ${j + 1}: ${somaColunas[j]}`);
    }
}
const matrizAleatoria = criarMatrizAleatoria(15, 20);
const somaColunas = calcularSomaColunas(matrizAleatoria);
imprimirSomaColunas(somaColunas);




