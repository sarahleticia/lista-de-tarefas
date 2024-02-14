const inputBox = document.getElementById("input-box");
const conteudoTarefas = document.getElementById("tarefa");

function adicionarTarefa(){
    if(inputBox.value === ''){ //verificando entradas com valor vazio
        alert("Por favor, digite a tarefa.");
    }
    else{
        //cria um novo elemento(tarefa) na lista 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        conteudoTarefas.appendChild(li);

        ////criando span com um x que ao selecionar o elemento é escondido
        let span = document.createElement("span"); 
        span.innerHTML="\u00d7" 
        li.appendChild(span);
    
    }

    inputBox.value =""; //limpa a caixa de entrada de texto após o elemento ser adicionado.
}

conteudoTarefas.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){ //define o texto como riscado ao concluir uma tarefa
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){ //remove o elemento da lista
        e.target.parentElement.remove();
    }
}, false);


