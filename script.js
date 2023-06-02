let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Veja a sua lista'
});
window.addEventListener('focus', () => {
    document.title = docTitle;
});



const lista = document.getElementById('lista');
const ul = document.querySelector('ul');
const listaTarefa = document.getElementById('lista-tarefa');
const erro = document.querySelector('.erro');



lista.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e) {
    if (e.key === "Enter") {
        if (lista.value === "") {
            erro.style.display = 'block';
        } else {
            erro.style.display = 'none';
            let novoItem = document.createElement("li");
            novoItem.innerHTML = lista.value;

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            novoItem.appendChild(checkbox);


            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    novoItem.style.color = 'red';
                    novoItem.style.textDecoration = 'line-through';
                    novoItem.style.animation = 'riscar 1s linear forwards';
                } else {
                    novoItem.style.color = '#c9c9c9';
                    novoItem.style.textDecoration = 'none';
                    novoItem.style.animation = 'none';
                }
            });



            ul.appendChild(novoItem);
            lista.value = "";
        }
    }
}


function limpar() {
    listaTarefa.innerHTML = ' ';
    lista.value = "";

}


