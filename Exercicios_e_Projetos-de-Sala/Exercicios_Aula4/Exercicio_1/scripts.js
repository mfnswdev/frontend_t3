class Computador{

    constructor(marca, processador, ano, preco){
        this.marca = marca;
        this.modelo = processador;
        this.ano = ano;
        this.preco = preco;
    }
 

    mostrarComputador(){
        console.log(`Computador: ${this.marca} ${this.modelo} ${this.ano} ${this.preco}`);
    }

    
    compareProcessador(outroComputador){
        if(this.processador === outroComputador.processador){
            console.log("Processador is the same");
            } else {
            console.log("Processador is different");
        }
     }
}

    const computador1 = new Computador("Dell", "i5", 2020, 3500);
    const computador2 = new Computador("HP", "i7", 2019, 4500);
    const computador3 = new Computador("Lenovo", "Ryzen 5", 2021, 5250);


computador1.mostrarComputador();
computador1.compareProcessador(computador2);

function computadorMAP(computador){
    let map = new Map();
    map.set("marca", computador.marca);
    map.set("modelo", computador.modelo);
    map.set("ano", computador.ano);
    map.set("preco", computador.preco);
    return map
}

const m1 = computadorMAP(computador1);
console.log(m1);

const tblHTML = document.getElementById("tabela");
function mapHTML(map){
    let table = document.createElement("table");
    for(let [key, value] of map){
        let row = document.createElement("tr");
        let keyCell = document.createElement("td");
        let valueCell = document.createElement("td");
        keyCell.textContent = key;
        valueCell.textContent = value;
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tr.appendChild(row);
    }
    tblHTML.appendChild(table);
}