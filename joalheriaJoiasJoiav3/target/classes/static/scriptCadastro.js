document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("cadastroClienteForm");
	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const nome = document.getElementById("nome").value;
		const cpf = document.getElementById("cpf").value;
		const email = document.getElementById("email").value;
		const telefone = document.getElementById("telefone").value;
		const dataNascimento = document.getElementById("dataNascimento")

		try {
			const response = await fetch("http://localhost:8080/cadastrocliente", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					nomeCliente: nome,
					cpf,
					email,
					dataNascimento,
					telefone
				}),
			});

			if (response.ok) {
				alert("Cliente cadastrado com sucesso!");

			} else {
				alert("Erro ao cadastrar o cliente");
			}

		} catch (error) {
			console.error("Erro ao cadastrar o cliente: ", error);
		}
	});

});