// script_formulario.js

function inserirPacote() {
    var destino = document.getElementById('destino').value;
    var imagem = document.getElementById('imagem').value;
    var diarias = document.getElementById('diarias').value;
    var cafeDaManha = document.getElementById('cafe-da-manha').checked;
    var preco = document.getElementById('preco').value;
    var obs = document.getElementById('obs').value;
    var parcelamento = document.getElementById('parcelamento').value;

    // Cria um novo elemento div para representar o pacote turístico
    var novoPacote = document.createElement('div');
    novoPacote.classList.add('roteiros-viagens');

    // Adiciona as informações ao novo elemento
    novoPacote.innerHTML = `
        <img src="${imagem}" class="postal">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">
            <li>Áereo ida e volta</li>
            <li>${diarias} diárias</li>
            <li>${cafeDaManha ? 'Café da Manhã' : ''}</li>
        </ul>
        <div class="roteiro-preco">${preco}</div>
        <div class="roteiro-obs">${obs}</div>
        <div class="roteiro-parcelamento">${parcelamento}</div>
        <button class="roteiro-comprar">Comprar</button>
    `;

    // Adiciona o novo pacote turístico à container-destinos
    document.querySelector('.container-destinos').appendChild(novoPacote);
}
