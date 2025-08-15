let chave = "d072c79b6524dcbbb6500f505faa40ac";

function colocarNaTela(dados) {
  console.log(dados);

  document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name;
  document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C';
}

async function buscarCidade(cidade) {
  try {
    let resposta = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        cidade +
        '&appid=' + chave + '&units=metric'
    );
    let dados = await resposta.json();

    if (resposta.ok) {
      colocarNaTela(dados);
    } else {
      alert('Cidade não encontrada ou erro na API.');
    }
  } catch (erro) {
    console.error('Erro ao buscar os dados:', erro);
    alert('Erro ao buscar os dados. Verifique sua conexão ou tente novamente.');
  }
}

function cliqueiNoBotao() {
  let cidade = document.querySelector('.input-cidade').value;

  if (cidade.trim() === '') {
    alert('Por favor, insira o nome de uma cidade.');
    return;
  }

  buscarCidade(cidade);
}
  
