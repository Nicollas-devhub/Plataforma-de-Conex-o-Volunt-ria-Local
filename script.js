// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================================
    // ARRAY GLOBAL PARA ARMAZENAMENTO DOS DADOS (REQUISITO)
    // ===================================================
    const necessidades = [];

    // Mapeamento dos elementos do formulário
    const form = document.getElementById('formCadastro');
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    const emailInput = document.getElementById('emailContato');
    const telefInput = document.getElementById('telefoneContato');

    // ==========================================
    // 1. INTEGRAÇÃO VIA CEP (API)
    // ==========================================
    cepInput.addEventListener('blur', async () => {
        // Remove qualquer caractere que não seja número
        const cep = cepInput.value.replace(/\D/g, '');

        if (cep.length === 8) {
            try {
                document.getElementById('erroCep').textContent = "";
                
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();

                if (data.erro) {
                    document.getElementById('erroCep').textContent = "CEP não encontrado.";
                    limparCamposEndereco();
                } else {
                    // Preenche os inputs com o retorno da API
                    ruaInput.value = data.logradouro;
                    bairroInput.value = data.bairro;
                    cidadeInput.value = data.localidade;
                    estadoInput.value = data.uf;
                }
            } catch (error) {
                console.error("Erro na requisição do ViaCEP:", error);
                document.getElementById('erroCep').textContent = "Erro ao buscar o CEP. Tente novamente.";
            }
        } else if (cep.length > 0) {
            document.getElementById('erroCep').textContent = "Formato de CEP inválido. Use 8 dígitos.";
            limparCamposEndereco();
        }
    });

    function limparCamposEndereco() {
        ruaInput.value = "";
        bairroInput.value = "";
        cidadeInput.value = "";
        estadoInput.value = "";
    }

    // ==========================================
    // 2. FUNÇÕES DE VALIDAÇÃO (FORMATO)
    // ==========================================
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarTelefone(telefone) {
        // Remove tudo que não for número e verifica se tem entre 10 e 11 dígitos (com DDD)
        const apenasNumeros = telefone.replace(/\D/g, '');
        return apenasNumeros.length >= 10 && apenasNumeros.length <= 11;
    }

    // ==========================================
    // 3. SUBMIT, VALIDAÇÃO GERAL E ARMAZENAMENTO
    // ==========================================
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o recarregamento da página
        
        let formularioValido = true;

        // Limpa todas as mensagens de erro antes de validar novamente
        document.querySelectorAll('.error-message').forEach(span => span.textContent = "");

        // Lista de campos obrigatórios para validação de presença (vazio)
        const camposObrigatorios = [
            { id: 'nomeInstituicao', erroId: 'erroNome', msg: 'O nome da instituição é obrigatório.' },
            { id: 'tipoAjuda', erroId: 'erroTipo', msg: 'Selecione um tipo de ajuda.' },
            { id: 'tituloNecessidade', erroId: 'erroTitulo', msg: 'O título da necessidade é obrigatório.' },
            { id: 'descricaoNecessidade', erroId: 'erroDescricao', msg: 'A descrição detalhada é obrigatória.' },
            { id: 'cep', erroId: 'erroCep', msg: 'O CEP é obrigatório.' },
            { id: 'rua', erroId: 'erroRua', msg: 'A rua é obrigatória.' },
            { id: 'bairro', erroId: 'erroBairro', msg: 'O bairro é obrigatório.' },
            { id: 'cidade', erroId: 'erroCidade', msg: 'A cidade é obrigatória.' },
            { id: 'estado', erroId: 'erroEstado', msg: 'O estado é obrigatório.' },
            { id: 'emailContato', erroId: 'erroEmail', msg: 'O e-mail de contato é obrigatório.' },
            { id: 'telefoneContato', erroId: 'erroTelefone', msg: 'O telefone de contato é obrigatório.' }
        ];

        // Valida se algum campo obrigatório está em branco
        camposObrigatorios.forEach(campo => {
            const input = document.getElementById(campo.id);
            if (!input || input.value.trim() === "") {
                document.getElementById(campo.erroId).textContent = campo.msg;
                formularioValido = false;
            }
        });

        // Valida o formato do e-mail
        if (emailInput.value.trim() !== "" && !validarEmail(emailInput.value)) {
            document.getElementById('erroEmail').textContent = "Por favor, insira um e-mail válido.";
            formularioValido = false;
        }

        // Valida o formato do telefone
        if (telefInput.value.trim() !== "" && !validarTelefone(telefInput.value)) {
            document.getElementById('erroTelefone').textContent = "Insira um telefone válido (com DDD, ex: 11999999999).";
            formularioValido = false;
        }

        // Se passar por todas as validações, salva a necessidade no Array
        if (formularioValido) {
            
            // Criação do objeto com os dados do formulário
            const novaNecessidade = {
                id: Date.now(), // Gera um ID único baseado no timestamp atual
                nomeInstituicao: document.getElementById('nomeInstituicao').value.trim(),
                tipoAjuda: document.getElementById('tipoAjuda').value