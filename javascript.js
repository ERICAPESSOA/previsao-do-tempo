const chave = "d072c79b6524dcbbb6500f505faa40ac";

function setMensagem(texto, isErro = false) {
  const msgElemento = document.querySelector('.mensaje');
  msgElemento.textContent = texto;
  msgElemento.style.color = isErro ? '#ffdddd' : '#ffffff';
}

function colocarNaTela(dados) {
  console.log(dados);

  document.querySelector('.cidade').textContent = `Tempo em ${dados.name}, ${dados.sys.country}`;
  document.querySelector('.temp').textContent = `Temperatura: ${Math.round(dados.main.temp)}°C`;
  document.querySelector('.umidade').textContent = `Umidade: ${dados.main.humidity}%`;
  setMensagem('Dados carregados com sucesso.', false);
}

async function buscarCidade(cidade) {
  try {
    setMensagem('Carregando...', false);
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${chave}&units=metric&lang=pt_br`
    );

    if (!resposta.ok) {
      setMensagem('Cidade não encontrada. Verifique o nome e tente novamente.', true);
      return;
    }

    const dados = await resposta.json();
    colocarNaTela(dados);
  } catch (erro) {
    console.error('Erro ao buscar os dados:', erro);
    setMensagem('Erro ao buscar os dados. Verifique sua conexão ou tente novamente.', true);
  }
}

function cliqueiNoBotao() {
  const inputCidade = document.querySelector('.input-cidade');
  const cidade = inputCidade.value.trim();

  if (cidade === '') {
    setMensagem('Por favor, insira o nome de uma cidade.', true);
    return;
  }

  buscarCidade(cidade);
}

const form = document.getElementById('weather-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  cliqueiNoBotao();
});

