document.addEventListener("DOMContentLoaded", () => {

	const form = document.getElementById("cadastroEnderecoForm");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const cep = document.getElementById("cep").value;
		const rua = document.getElementById("rua").value;
		const bairro = document.getElementById("bairro").value;
		const numero = document.getElementById("numero").value;
		const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const complemento = document.getElementById("complemento").value;

		try {
			const response = await fetch("http://localhost:8080/cadastroendereco", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					cep,
                    rua,
                    bairro,
                    numero,
                    cidade,
                    estado,
                    complemento
				}),
			});

			if (response.ok) {
				alert(" Endereço do cliente cadastrado com sucesso!");
			} else {
				alert("Erro ao cadastrar o  endereço do cliente");
			}
		} catch (error) {
			console.error("Erro ao cadastrar o endereço do cliente", error);
		}

	});

});