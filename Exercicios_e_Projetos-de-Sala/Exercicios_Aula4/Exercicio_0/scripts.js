class Tarefa {
    construct(nome) { 
        this.nome = nome;
    }
}

const button = document.querySelector("button");
var txt = document.querySelector("input");
button.addEventListener("click", adcionaTarefa);


function adcionaTarefaDOM(tarefa) {
    let listaTarefas = document.getElementById("listaTarefas");
    let li = document.createElement("li");
    li.innerText = txt.value;
    listaTarefas.appendChild(li);
    }



 function tarefaNoStorage(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    
}




