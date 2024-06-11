const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);
    criancas.push({
        nome,
        idade
    });
    frm.reset();
    frm.inNome.focus();
    frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
    if(criancas.length === 0){
        alert("Não há crianças na Lista");
        return;
    }
    let lista = "";
    for(const crianca of criancas){
        const {nome, idade} = crianca;
        lista += nome + " - " + idade + " anos\n";
    }

    resp.innerText = lista;
});