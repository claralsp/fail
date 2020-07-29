import { showList, showDetail } from './navigation.js';
import { listItemTemplate, typeTemplate } from './templates.js';
import { capitalize } from './capitalize.js';
import { friendlyFetch } from './data.js';

// endereço da API: usado para fazer as requisições
const api = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mg';

// pega todos os elementos HTML que serão necessários
//const estadoEl = document.querySelector('p');
// lista com todos os pokemons
//let pokemons = [];

function dadosCovid(dados){
	const bodyEl = document.body;
	bodyEl.innerHTML = <h1>${dados.state}</h1><p>Casos Confirmados: ${dados.cases}</p>
}

friendlyFetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mg')
  .then(resposta => resposta.JSON())
  .then(resposta => dadosCovid(resposta.data))

function mostraCovid(dados){
	const casosEl = document.querySelector('p');
	const mortalEl = document.querySelector('p');
	const suspeitosEl = document.querySelector('p');
	const recusasEl = document.querySelector('p');
	const dataEl = document.querySelector('p');
	ufEl.innerHTML = dados.uf;
	estadoEl.innerHTML = 'ESTADO:' + dados.state;
	casosEl.innerHTML = 'CASOS:' + dados.cases;
	mortalEl.innerHTML = 'MORTES' + dados.deaths;
	suspeitosEl.innerHTML = 'SUSPEITOS' + dados.suspects;
	recusasEl.innerHTML = 'NEGATIVOS' + dados.refuses;
	dataEl.innerHTML = 'DATA DOS DADOS' + dados.datetime;
}

friendlyFetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mg')
  .then(resposta => resposta.JSON())
  .then(resposta => mostraCovid(resposta.data))


