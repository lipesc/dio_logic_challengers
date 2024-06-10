// ler e escrever um valor inteiro em javascript, usando gets e print acessiveis globalmente:
//- gets : lê uma linha com dados de entrada (inputs) do usuário;
//- print : exibe a saída (output) de dados para o usuário pulando linhas.

//###******** exemplo usando gets e print ambiente DIO
// const valorSalario = parseFloat(gets());
// const valorBeneficios = parseFloat(gets());

// const valorImposto = calcularImposto(valorSalario);

// const saida = valorSalario - valorImposto + valorBeneficios;
// print(saida.toFixed(2));


// function calcularImposto(salaraio){
//   let aliquota;
//   if (salaraio >= 0 && salaraio <= 1100){
//     aliquota = 0.05;
  // }else if (salario >= 1100.01 && salario <= 2500){
  //   aliquota = 0.10;
  // } else {  // 2500.01 e acima 
  //   aliquota = 0.15;
  // }
// return aliquota * salaraio;
// }

// ###********  usando prompt no navegador
// const valorSalario = parseFloat(prompt("Digite o valor do salário:"));
// const valorBeneficios = parseFloat(prompt("Digite o valor dos benefícios:"));

// const valorImposto = calcularImposto(valorSalario);

// const saida = valorSalario - valorImposto + valorBeneficios;
// console.log(saida.toFixed(2));

// function calcularImposto(salario){
//   let aliquota = 0;  // Valor padrão
//   if (salario >= 0 && salario <= 1100){
//     aliquota = 0.05;
//   }else if (salario >= 1100.01 && salario <= 2500){
  //     aliquota = 0.10;
  //   } else {  // 2500.01 e acima 
  //     aliquota = 0.15;
  // }
//   // Adicione mais condições aqui se necessário
//   return aliquota * salario;
// }

// ###******** vscode 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('Digite o valor do salário: ', (valorSalario) => {
  rl.question('Digite o valor dos benefícios: ', (valorBeneficios) => {
    valorSalario = parseFloat(valorSalario);
    valorBeneficios = parseFloat(valorBeneficios);

    const valorImposto = calcularImposto(valorSalario);

    const saida = valorSalario - valorImposto + valorBeneficios;
    console.log(saida.toFixed(2));

    rl.close();
  });
});

function calcularImposto(salario){
  let aliquota = 0;  // Valor padrão

  if (salario >= 0 && salario <= 1100){
    aliquota = 0.05;
  } else if (salario >= 1100.01 && salario <= 2500){
    aliquota = 0.10;
  } else {  // 2500.01 e acima 
    aliquota = 0.15;
  }
  // Adicione mais condições aqui se necessário
  return aliquota * salario;
}

