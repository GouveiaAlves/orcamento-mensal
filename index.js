function minhaConta(valorInicial) {

	let saldo = Number(localStorage.getItem("saldo")) || valorInicial;


	function guardarSaldo() {
		localStorage.setItem("saldo", saldo);
	}
	return {
		depositar(montante) {
			saldo += montante
			guardarSaldo()
		},
		sacar(montante) {
			saldo -= montante
			guardarSaldo()
		},
		mostrarSaldo() {
			return saldo
		}, resetar() {
			saldo = 0
			guardarSaldo()
		}
	}
}
const conta = minhaConta(0)

const elSaldo = document.getElementById("saldo")
const input = document.getElementById("valor")

function atualizarSaldo() {
	elSaldo.textContent = conta.mostrarSaldo() + "€"
}

function depositar() {
	const valor = Number(input.value)
	conta.depositar(valor)
	atualizarSaldo()
	input.value = ""
}
function sacar() {
	const valor = Number(input.value)
	conta.sacar(valor)
	atualizarSaldo()
	input.value = ""
}
function reset() {
	conta.resetar()
	atualizarSaldo()
	input.value = ""
}
atualizarSaldo()