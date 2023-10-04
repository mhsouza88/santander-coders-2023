const eventos = {
  CALCULAR: "CALCULAR_EVENTO",
};

const app = document.querySelector("app");
const container = criarElemento("div", "container mt-5");
const titulo = criarElemento("h1", "text-center mb-4", "Churrascômetro");
const formularioDiv = criarFormulario();
const botaoTema = criarBotaoTema();
const calculadora = criarCalculadora();
const resultado = criarElemento("div", "text-center mt-3");

adicionarEventos();

app.appendChild(container);
container.appendChild(titulo);
container.appendChild(formularioDiv);
container.appendChild(calculadora);
container.appendChild(botaoTema);
calculadora.appendChild(resultado);

if (localStorage.getItem("formularioEnviado") === "true") {
  formularioDiv.style.display = "none";
}

function criarElemento(tag, classes, texto) {
  const elemento = document.createElement(tag);
  elemento.className = classes;
  if (texto) elemento.innerText = texto;
  return elemento;
}

function criarBotaoTema() {
  const botao = criarElemento(
    "button",
    "btn btn-primary position-fixed top-0 end-0 mt-3 me-3",
    "Trocar Tema"
  );
  botao.addEventListener("click", trocarTema);
  return botao;
}

function criarFormulario() {
  const cardDiv = criarElemento("div", "card p-4 mx-auto mb-4");
  cardDiv.style.maxWidth = "25rem";
  const inputRow = criarElemento("div", "row mb-3");
  const nomeInputDiv = criarCampo("text", "Nome", "nome");
  const emailInputDiv = criarCampo("email", "E-mail", "email");
  const cepInputDiv = criarCampo("text", "CEP", "cep");
  nomeInputDiv.classList.add("col");
  emailInputDiv.classList.add("col");
  cepInputDiv.classList.add("col");
  inputRow.appendChild(nomeInputDiv);
  inputRow.appendChild(emailInputDiv);
  inputRow.appendChild(cepInputDiv);
  const checkbox = criarCheckbox(
    "Aceito receber e-mails com promoções.",
    "consentimento"
  );
  const botaoEnviar = criarElemento("button", "btn btn-primary mt-3", "Enviar");
  botaoEnviar.addEventListener("click", function () {
    // Pega os valores dos inputs e do checkbox
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const consentimento = document.getElementById("consentimento").checked;

    // Verifica se todos os campos estão preenchidos e o checkbox está marcado
    if (nome && email && cep && consentimento) {
        cardDiv.style.display = "none";
        localStorage.setItem("formularioEnviado", "true");
    } else {
        window.alert("Você precisa preencher todos os campos e marcar o termo de aceite.");
    }
});

  cardDiv.appendChild(inputRow);
  cardDiv.appendChild(checkbox);
  cardDiv.appendChild(botaoEnviar);
  return cardDiv;
}

function criarCampo(tipo, label, id) {
  const div = criarElemento("div", "mb-3");
  const inputLabel = criarElemento("label", "", label);
  inputLabel.setAttribute("for", id);
  const input = criarElemento("input", "form-control");
  input.type = tipo;
  input.id = id;
  input.required = true;
  const valorSalvo =
    localStorage.getItem("formularioEnviado") !== "true"
      ? localStorage.getItem(id)
      : null;
  if (valorSalvo) input.value = valorSalvo;
  input.addEventListener("input", function () {
    localStorage.setItem(id, input.value);
  });
  if (id === 'cep') {
    input.addEventListener('blur', consultarCEP);
}
  div.appendChild(inputLabel);
  div.appendChild(input);
  return div;
}

async function consultarCEP(e) {
  const cep = e.target.value;

  try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
          alert('CEP inválido!');
      } else {
          alert(`Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
      }
  } catch (error) {
      alert('Erro ao consultar CEP!');
  }
}

function criarCheckbox(label, id) {
  const div = criarElemento("div", "form-check");
  const input = criarElemento("input", "form-check-input");
  input.type = "checkbox";
  input.id = id;
  input.checked = true;
  input.required = true;
  const inputLabel = criarElemento("label", "form-check-label");
  inputLabel.setAttribute("for", id);
  inputLabel.innerText = label;
  div.appendChild(input);
  div.appendChild(inputLabel);
  return div;
}
function criarCalculadora() {
  const calculadoraDiv = criarElemento("div", "card p-4 mx-auto mb-4");
  calculadoraDiv.style.maxWidth = "25rem";
  const inputRow = criarElemento("div", "row mb-3");
  const grupoAdultos = criarGrupoInput("Adultos", "adultos");
  const grupoCriancas = criarGrupoInput("Crianças", "criancas");
  const botaoCalcular = criarElemento(
    "button",
    "btn btn-primary w-100 mt-3",
    "Calcular"
  );
  botaoCalcular.addEventListener("click", calcularChurrasco);
  inputRow.appendChild(grupoAdultos);
  inputRow.appendChild(grupoCriancas);
  calculadoraDiv.appendChild(inputRow);
  calculadoraDiv.appendChild(botaoCalcular);
  return calculadoraDiv;
}

function criarGrupoInput(rotuloTexto, id) {
  const grupo = criarElemento("div", "col");
  const rotulo = criarElemento("span", "", rotuloTexto);
  const input = criarElemento("input", "form-control");
  input.setAttribute("type", "number");
  input.setAttribute("id", id);
  input.setAttribute("value", "0");
  input.setAttribute("min", "0");
  input.setAttribute(
    "oninput",
    "this.value = this.value.replace(/[^0-9]/g, '')"
  );
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      calcularChurrasco();
    }
  });
  grupo.appendChild(rotulo);
  grupo.appendChild(input);
  return grupo;
}

function trocarTema() {
  const modoEscuroAtivado = document.body.classList.toggle("modo-escuro");
  titulo.style.color = modoEscuroAtivado ? "white" : "black";
  localStorage.setItem("modo-escuro", modoEscuroAtivado);
}

function adicionarEventos() {
  app.addEventListener(eventos.CALCULAR, mostrarResultados);
}

function mostrarResultados(e) {
  const {
    totalPicanha,
    totalLinguica,
    totalPaoDeAlho,
    totalRefrigerante,
    totalCerveja,
    valorTotal,
    valorPorPessoa,
    pesoTotalCarne,
  } = e.detail;
  resultado.innerHTML = `Picanha: ${totalPicanha.toFixed(
    2
  )} KG<br>Linguiça: ${totalLinguica.toFixed(
    2
  )} KG<br>Pão de Alho: ${totalPaoDeAlho} unidade(s)<br>Refrigerante (325ml): ${totalRefrigerante} lata(s)<br>Cerveja (600ml): ${totalCerveja} lata(s)<br>Valor Total: R$ ${valorTotal.toFixed(
    2
  )}<br>Valor por Pessoa: R$ ${valorPorPessoa.toFixed(
    2
  )}<br>Peso Total de Carne: ${pesoTotalCarne.toFixed(2)} KG`;
}

function calcularChurrasco() {
  const adultos = Number(document.getElementById("adultos").value);
  const criancas = Number(document.getElementById("criancas").value);
  const precoPicanha = 50;
  const precoLinguica = 20;
  const totalPicanha = adultos * 0.8 + criancas * 0.6;
  const totalLinguica = adultos * 0.9 + criancas * 0.7;
  const totalPaoDeAlho = adultos * 2 + criancas * 1;
  const totalRefrigerante = adultos + criancas;
  const totalCerveja = adultos;
  const valorPaoDeAlho = totalPaoDeAlho * 2;
  const valorRefrigerante = totalRefrigerante * 5;
  const valorCerveja = totalCerveja * 10;
  const valorTotalCarne =
    totalPicanha * precoPicanha + totalLinguica * precoLinguica;
  const valorTotal =
    valorPaoDeAlho + valorRefrigerante + valorCerveja + valorTotalCarne;
  const totalPessoas = adultos + criancas;
  const valorPorPessoa = totalPessoas ? valorTotal / totalPessoas : 0;
  const pesoTotalCarne = totalPicanha + totalLinguica;

  calculadora.dispatchEvent(
    new CustomEvent(eventos.CALCULAR, {
      detail: {
        totalPicanha,
        totalLinguica,
        totalPaoDeAlho,
        totalRefrigerante,
        totalCerveja,
        valorPaoDeAlho,
        valorRefrigerante,
        valorCerveja,
        valorTotal,
        valorTotalCarne,
        valorPorPessoa,
        pesoTotalCarne,
      },
      bubbles: true,
    })
  );
}

if (localStorage.getItem("modo-escuro") === "true") {
  trocarTema();
}

botaoCalcular.addEventListener("click", calcularChurrasco);

inputAdultos.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    calcularChurrasco();
  }
});

inputCriancas.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    calcularChurrasco();
  }
});

calculadora.appendChild(resultado);
container.appendChild(titulo);
container.appendChild(calculadora);
container.appendChild(botaoTema);
app.appendChild(container);
