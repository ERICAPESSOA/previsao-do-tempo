
 let chave = "d072c79b6524dcbbb6500f505faa40ac"

function colocarNaTela(dados) {
    console.log(dados)
  
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
   
  }
  
  async function buscarCidade(cidade) {
    let dados = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        cidade +
        '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric',
    ).then((resposta) => resposta.json())
  
  
    colocarNaTela(dados)
  }
  
  function cliqueiNoBotao() {
    let cidade = document.querySelector('.input-cidade').value
  
    buscarCidade(cidade)
  }
  
