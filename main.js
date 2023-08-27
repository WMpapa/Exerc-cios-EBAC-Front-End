const form = document.getElementById('form-deposito');

function validaValor(valorMensalidade) {
    const valorComoArray = valorMensalidade == 300.00;
    return valorComoArray == 300.00;
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const valorMensalidade = document.getElementById('valor-mensalidade');
    if (!validaValor(valorMensalidade.value)) {
        alert("Valor correto 300.00")
    }
})

console.log(form);