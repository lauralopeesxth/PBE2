
document.getElementById("cep").addEventListener("input", async function (){
    const cep = this.valei.replace(/\D/g, "");
    
    if (cep.lenght === 8){
        
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            
            if(!response.ok) throw new Error ("Erro ao buscar CEP");
            
            const dados = await response.json();
                        if (dados.erro){
                alert("CEP não encontrado.")
                return;
            }
            document.getElementById("rua").value = dados.rua;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.cidade;
            document.getElementById("estado").value = dados.estado;
        } catch (error){
            alert("Erro ao byscar endereço: " + error.message);
        }
    }
    
    
})



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

            if (!response.ok) {
                throw new Error ("Erro ao cadastrar o endereço do cliente");
                
            } else {
                alert("Erro ao cadastrar o  endereço do cliente");
            }
        } catch (error) {
            console.error("Erro ao cadastrar o endereço do cliente", error);
        }

    });

});
