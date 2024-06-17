let tituloCriado = document.querySelectorAll("#titulo")
let descricaoCriada = document.querySelectorAll("#descricao")
let botaoCriacao = document.querySelector("#botao-criacao")
let container = document.querySelector(".container-lista")


botaoCriacao.addEventListener('click', () => {

    let tituloSalvar = Array.from(tituloCriado).map(titulo => titulo.value);

    let descricaoSalvar = Array.from(descricaoCriada).map(descricao => descricao.value);


    tituloSalvar = validacaoTitulo(tituloSalvar)
    descricaoSalvar = validacaoDescricao(descricaoSalvar)
    criacaoLista(tituloSalvar, descricaoSalvar)

    titulo.value = '';
    descricao.value = '';

});



function validacaoTitulo(tituloSalvar){
    if (tituloSalvar == ''){
        tituloSalvar = 'Sem titulo definido'
        return tituloSalvar
    } else{
        return tituloSalvar
    }
    
}

function validacaoDescricao(descricaoSalvar){
    if (descricaoSalvar == ''){
        descricaoSalvar = 'Sem descrição definida'
        return descricaoSalvar
    } else{
        return descricaoSalvar
    }
    
}

function criacaoLista(tituloSalvar, descricaoSalvar){

    let criarListaNova = document.createElement('div');
    let tituloListaNova = document.createElement('h4');
    let descricaoListaNova = document.createElement('p');
    let divSelecaoNova = document.createElement('div');
    let divFinalizarNova = document.createElement('div');
    let spanFinalizarNova = document.createElement('span');
    let checkboxFinalizarNova = document.createElement('input');
    let botaoApagarNova = document.createElement('button');
    let imgBotaoApagarNova = document.createElement('img');

    let textoSpan = document.createTextNode('Concluir tarefa');

    
    spanFinalizarNova.appendChild(textoSpan);
    checkboxFinalizarNova.setAttribute("type", "checkbox");
    checkboxFinalizarNova.setAttribute("name", "finalizado");
    checkboxFinalizarNova.setAttribute("id", "finalizado");
    divFinalizarNova.setAttribute("id", "finalizar")
    divFinalizarNova.append(spanFinalizarNova, checkboxFinalizarNova);

    imgBotaoApagarNova.src = "./lixeira-de-reciclagem.png";
    botaoApagarNova.setAttribute("id", "excluir");
    botaoApagarNova.appendChild(imgBotaoApagarNova);

    divSelecaoNova.setAttribute("id", "selecao");
    divSelecaoNova.append(divFinalizarNova, botaoApagarNova);

    tituloListaNova.setAttribute("class", "titulo-lista");
    descricaoListaNova.setAttribute("class", "descricao-lista");

    criarListaNova.setAttribute("id", "lista");
    tituloListaNova.textContent = tituloSalvar;
    descricaoListaNova.textContent = descricaoSalvar;
    criarListaNova.append(tituloListaNova, descricaoListaNova, divSelecaoNova);

    
    container.appendChild(criarListaNova);

    checkboxFinalizarNova.addEventListener('change', () => {
        criarListaNova.classList.toggle('concluido');       
    });

    botaoApagarNova.addEventListener('click', ()=>{
        criarListaNova.remove();
    })
}



