function Media4Bimestres() {
  let nome = document.getElementById("nome").value;
  let pNota = parseFloat(document.getElementById("nota-1").value);
  let sNota = parseFloat(document.getElementById("nota-2").value);
  let tNota = parseFloat(document.getElementById("nota-3").value);
  let qNota = parseFloat(document.getElementById("nota-4").value);
  
  let elementoMensagem = document.getElementById("mensagem")
  
  if (pNota <0 || sNota <0 || tNota <0 || qNota <0 || pNota >10 || sNota >10 || tNota >10 || qNota >10) {
    mensagem = "Verifique os valores das suas notas. Elas devem estar entre 0 e 10.";
    elementoMensagem.innerHTML = mensagem;
  }
  
  
  let media = ((pNota + sNota + tNota + qNota) / 4);
  
  let output = document.getElementById("resultado")
  
  if (media >= 5 && media <= 10) {
    resposta = nome + ", sua média foi " + media + ". Você foi aprovad@!";
    output.innerHTML = resposta;
  } else {
    resposta = nome + ", sua média foi " + media + ". Você foi reprovad@.";
    output.innerHTML = resposta;
  }
}