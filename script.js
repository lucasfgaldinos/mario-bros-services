const btnContato = document.querySelector(".btn-contato")
const linkContato = document.querySelector(".link-header-fale-conosco")
const form = document.querySelector("form")
const mascaraForm = document.querySelector(".mascara-form")
const btnPedirOrcamento = document.querySelector("#btn-pedir-orcamento")

const showForm = () => {
    form.style = `
        left: 50%;
        transform: translateX(-50%);
    `
    mascaraForm.style = `z-index: 1;`
}

const hideForm = () => {
    form.style = `
        left: -275px;
        transform: none;
    `
    mascaraForm.style = `z-index: -3;`
}


btnContato.addEventListener("click", showForm)
linkContato.addEventListener("click", showForm)
mascaraForm.addEventListener("click", hideForm)
btnPedirOrcamento.addEventListener("click", hideForm)




















// form {
// left: 50%;
// transform: translateX(-50%);