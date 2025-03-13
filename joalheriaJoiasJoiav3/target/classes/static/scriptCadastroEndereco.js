document.getElementById("cep").addEventListener("input", async function(){
	const cep = this.value.replace(/\D/g, "");

	if( cep.length === 8 ){
		try{
			const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);

			if(!response.ok) throw new Error("Erro ao buscar o CEP");

			const dados = await response.json();

			if (dados.erro){
				alert("CEP não encontrado.")
				return;
			}
			document.getElementById("rua").value = dados.logradouro;
			document.getElementById("bairro").value = dados.bairro;
			document.getElementById("cidade").value = dados.localidade;
			document.getElementById("estado").value = dados.uf;

		} catch (error) {
			alert("Erro ao buscar o endereço: " + error.message);
		}
	}
})


document.addEventListener("DOMContentLoaded", () => {
	
	const form = document.getElementById("cadastroEndereco");
	
	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		
		const cep = document.getElementById("cep").value;
		const rua = document.getElementById("rua").value;
		const numero = document.getElementById("numero").value;
		const cidade = document.getElementById("cidade").value;
		const estado = document.getElementById("estado").value;
		const complemento = document.getElementById("complemento").value;
		const bairro = document.getElementById("bairro").value;
		
		try {
			const response = await fetch("http://localhost:8080/cadastroendereco", {
				method: "POST", 
				headers: {
					"Content-Type": "application/json"
				},
				body:JSON.stringify({
					cep,
					rua,
					numero,
					cidade,
					estado,
					complemento,
					bairro
				}),
			});
			if (response.ok){
				setTimeout(function() {
					window.location.href = "sucessocadastro.html";
				}, 1000);
			} else {
				alert("Erro ao cadastrar o endereço")
			} 
		} catch (error){
				console.error("Erro ao cadastrar o endereço", error);
			}
			
	});
});