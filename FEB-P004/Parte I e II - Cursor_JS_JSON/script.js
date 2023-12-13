// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões com a classe "roteiro-comprar"
    var buttons = document.querySelectorAll('.roteiro-comprar');

    // Adiciona um evento de clique a cada botão
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Captura as informações do pacote turístico
            var container = button.closest('.roteiros-viagens');
            var destino = container.querySelector('.roteiro-destino').textContent;
            var inclusos = container.querySelectorAll('.roteiro-incluso li');
            var preco = container.querySelector('.roteiro-preco').textContent;
            var obs = container.querySelector('.roteiro-obs').textContent;
            var parcelamento = container.querySelector('.roteiro-parcelamento').textContent;

            // Cria um objeto JSON com as informações capturadas
            var pacoteTuristico = {
                destino: destino,
                inclusos: [],
                preco: preco,
                obs: obs,
                parcelamento: parcelamento
            };

            inclusos.forEach(function (item) {
                pacoteTuristico.inclusos.push(item.textContent.trim());
            });

            // Imprime o objeto JSON no console
            console.log(pacoteTuristico);
        });
    });
});
