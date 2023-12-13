document.addEventListener("DOMContentLoaded", function () {
    const intext = document.querySelector(".servicos p");

    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/45662-204?unitGroup=metric&key=YOUR_API_KEY&contentType=json", {
        "method": "GET",
        "headers": {
        }
    }).then(response => response.json())
        .then(data => {
            var clima = data.days[0].temp;
            var descricao = data.days[0].conditions;

            intext.innerText = `Clima: ${clima}°C - ${descricao}`;
            console.log(data);
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
        });
});