const form = document.getElementById('form-deposito');

function validaValor(valorMensalidade) {
    const valorComoArray = valorMensalidade == 300;
    return valorComoArray == 300;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault()

    const valorMensalidade = document.getElementById('valor-mensalidade');
    const valorDeposito = document.getElementById('valor-depositado');
    const mensagemSucesso = `Montante de ${valorDeposito.value} depositado!`

    formEValido = validaValor(valorDeposito.value)
    if (formEValido) {
        alert(mensagemSucesso);
    } else {
        alert("Valor correto 300!");
    }
})

console.log(form);