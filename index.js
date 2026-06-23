function minhaConta(valorInicial) {

	let receitas = Number(localStorage.getItem("receitas")) || 0;
	let despesas = Number(localStorage.getItem("despesas")) || 0;
	let saldo = Number(localStorage.getItem("saldo")) || 0;
	let movimentos = JSON.parse(localStorage.getItem("movimentos")) || [];
	

	function guardarSaldo() {
		localStorage.setItem("saldo", saldo);
		localStorage.setItem("receitas", receitas);
		localStorage.setItem("despesas", despesas);

		localStorage.setItem("movimentos", JSON.stringify(movimentos))
	}
	return {
		depositar(montante) {
			receitas += montante
			saldo += montante
			movimentos.push({
	
				descricao: descricao.value,
				valor: montante,
				tipo: "+"
			})
			guardarSaldo()
		},
		
		sacar(montante) {
			despesas += montante
			saldo -= montante
			movimentos.push({
			   
				descricao: descricao.value,
				valor: montante,
				tipo: "-"
			})
			guardarSaldo()
		},
		mostrarReceitas() {
			return receitas
		}, 
		mostrarDespesas() {
			return despesas
		},
		mostrarSaldo() {
			return saldo
		},
		mostrarMovimentos() {
			return movimentos
		},
		resetar() {
			receitas = 0
			despesas = 0
			saldo = 0
			movimentos = []
			guardarSaldo()
		}
	}
}
const conta = minhaConta(0)

	const input = document.getElementById("input")
	const categoria = document.getElementById("categoria")
	const  descricao= document.getElementById("descricao")


const elReceitas = document.getElementById("receitas")
const elDespesas = document.getElementById("despesas")
const elSaldo = document.getElementById("saldo")
const listaMovimentos = document.getElementById("movimentos")

function mostrarMovimentos() {

	listaMovimentos.innerHTML = "";

	for(const movimento of conta.mostrarMovimentos()) {

		const li = document.createElement("li")
		li.textContent =
		
		movimento.descricao  + " " +
		movimento.tipo + movimento.valor + "€"

		listaMovimentos.appendChild(li)
	}
}

function atualizarInterface() {
	elReceitas.textContent = conta.mostrarReceitas() + "€"
	elDespesas.textContent = conta.mostrarDespesas() + "€"
	elSaldo.textContent = conta.mostrarSaldo() + "€"

	mostrarMovimentos()
}

function depositar() {
	const valor = Number(input.value)

	if(valor <= 0 || isNaN(valor)) {
		input.value = ""
		descricao.value = ""
		return

	}
	conta.depositar(valor)
	atualizarInterface()
	input.value = ""
	descricao.value = ""
}
function sacar() {
	const valor = Number(input.value)

	if(valor <= 0 || isNaN(valor)) {
		input.value = ""
		descricao.value = ""
		return

	}
	conta.sacar(valor)
	atualizarInterface()
	input.value = ""
	descricao.value = ""
}
function reset() {
	conta.resetar()
	atualizarInterface()
	
	input.value = ""
	descricao.value = ""
}

atualizarInterface()

