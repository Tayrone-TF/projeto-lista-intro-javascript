// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaInformada = Number(prompt('Informe a altura:'))
  const larguraInformada = Number(prompt('Informe a largura:'))
  const area = alturaInformada * larguraInformada
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtualInformado = Number(prompt('Informe o ano atual:'))
  const anoNascimentolInformado = Number(prompt('Informe o seu ano de nascimento:'))
  const idade = anoAtualInformado - anoNascimentolInformado
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura ** 2)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeInformado = prompt('Informe seu nome:')
  const idadeInformado = prompt('Informe sua idade:')
  const emailInfirmado = prompt('Informe seu e-mail:')
  console.log(`Meu nome é ${nomeInformado}, tenho ${idadeInformado} anos, e o meu email é ${emailInfirmado}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1Informada = prompt('Informe a primeira cor favorita:')
  const cor2Informada = prompt('Informe a segunda cor favorita:')
  const cor3Informada = prompt('Informe a terceira cor favorita:')
  const coresFavoritas = [cor1Informada, cor2Informada, cor3Informada]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const tudoMaiuscula = string.toUpperCase()
  return tudoMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const totalIngressos = custo / valorIngresso
  return totalIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeioIndice = array[0]
  const ultimoIndice = array[array.length - 1]
  array.shift()
  array.unshift(ultimoIndice)
  array.pop()
  array.push(primeioIndice)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const primeiraString = string1.toUpperCase()
  const segundaString = string2.toUpperCase()
  return primeiraString === segundaString
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoRg) {
  // implemente sua lógica aqui
  const anoAtualInformado = Number(prompt('Informe o ano atual:'))
  const anoNascimentoInformado = Number(prompt('Informe o ano do seu nascimento:'))
  const anoEmissaoInformado = Number(prompt('Informe o ano da emissão do RG:'))
  const idade = anoAtualInformado - anoNascimentoInformado
  const tempoDeEmissao = anoAtualInformado - anoEmissaoInformado



  if (idade <= 20 && tempoDeEmissao >= 5) {
    console.log(true)
  } else if (idade > 20 && idade <= 50 && tempoDeEmissao >= 10) {
    console.log(true)
  } else if (idade > 50 & tempoDeEmissao >= 15) {
    console.log(true)
  } else {
    console.log(false)
  }
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    return true
  } else {
    return false
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const ehMaiorDeIdade = prompt('Você tem mais de 18 anos?')
  const temEnsinoMedioCompleto = prompt('Você possui ensino médio completo?')
  const temDisponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  if(ehMaiorDeIdade === 'sim' && temEnsinoMedioCompleto === 'sim' && temDisponibilidade === 'sim'){
    console.log(true)
  } else {
    console.log(false)
  }

}