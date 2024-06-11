const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nome = frm.inNome.value;
    const idade = Number(frm.inNumber.value);
    criancas.push({
        nome,
        idade
    });
    frm.reset();
    frm.inNome.focus();
    frm.btListar.dispatchEvent(new Event("click"));
})