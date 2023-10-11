const tabela = document.querySelector("#boletim tbody")

console.log(tabela)

let.continuar = true

while (continuar){
    const disciplina = prompt("Nome da Disciplina")
    const nota = prompt("Nota da Disciplina")

    tabela.innerHTML +=  `
        <tr>
            <td>${disciplina}</td>
            <td>${nota}</td>
        </tr>
    `
    continuar = confirm("Inserir mais Disciplinas?")
}