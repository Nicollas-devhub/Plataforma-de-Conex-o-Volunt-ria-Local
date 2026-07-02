# Plataforma-de-Conex-o-Volunt-ria-Local

# Plataforma de Conexão Voluntária Local

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de aproximar instituições sociais (ONGs) de pessoas que desejam atuar como voluntárias. Muitas organizações ainda realizam a divulgação de suas necessidades de forma manual, dificultando a comunicação com possíveis voluntários.

Pensando nisso, foi criada uma plataforma simples, intuitiva e responsiva, onde as instituições podem cadastrar suas necessidades e os voluntários podem visualizar as oportunidades disponíveis de maneira organizada.

Além de colocar em prática conceitos de desenvolvimento web, o projeto busca demonstrar como a tecnologia pode contribuir para gerar impacto positivo na sociedade.

---

## Objetivos

* Facilitar a divulgação das necessidades das instituições.
* Aproximar voluntários de projetos sociais.
* Tornar o processo de captação de voluntários mais organizado.
* Aplicar conceitos de HTML, CSS e JavaScript.
* Utilizar consumo de APIs externas.
* Praticar versionamento de código com Git e GitHub.

---

## Funcionalidades

### Página Inicial

A página inicial apresenta uma breve explicação sobre a plataforma e orienta o usuário para as demais funcionalidades do sistema.

---

### Cadastro de Necessidades

Nesta página, as instituições podem cadastrar uma nova necessidade de ajuda.

O formulário possui os seguintes campos:

* Nome da Instituição
* Tipo de Ajuda
* Título da Necessidade
* Descrição Detalhada
* CEP
* Rua
* Bairro
* Cidade
* Estado
* Contato (telefone ou e-mail)

Todos os campos obrigatórios possuem validação antes do envio.

---

### Integração com ViaCEP

Ao informar o CEP, a aplicação realiza automaticamente uma consulta na API do ViaCEP.

Com isso, os seguintes campos são preenchidos automaticamente:

* Rua
* Bairro
* Cidade
* Estado

Isso reduz erros de digitação e torna o cadastro muito mais rápido.

---

### Armazenamento dos Dados

Após o envio do formulário, todas as informações cadastradas são armazenadas em um **array JavaScript**, permitindo que sejam utilizadas posteriormente pela aplicação.

---

### Visualização das Necessidades

Todas as necessidades cadastradas são exibidas dinamicamente em uma página específica.

Cada cadastro é apresentado em formato de **card**, contendo informações importantes como:

* Nome da Instituição
* Tipo de Ajuda
* Título
* Descrição
* Localização
* Contato

Esse formato facilita a leitura e melhora a experiência do usuário.

---

### Pesquisa e Filtros

A plataforma permite localizar necessidades de forma rápida utilizando:

* Pesquisa por palavras-chave no título ou descrição.
* Filtro por Tipo de Ajuda.

Assim, o voluntário consegue encontrar exatamente a oportunidade que procura.

---

## Responsividade

Toda a aplicação foi desenvolvida utilizando conceitos de **Responsive Design**, garantindo boa experiência em:

* Computadores
* Tablets
* Smartphones

O layout adapta automaticamente os elementos conforme o tamanho da tela.

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* API ViaCEP
* Git
* GitHub
* GitHub Pages

---

## Organização do Projeto

```text
Projeto/
│
├── HTML/
│   ├── index.html
│   ├── cadastro.html
│   └── visualizacao.html
│
├── CSS/
│   └── style.css
│
├── JS/
│   └── script.js
│
└── README.md
```

---

## Boas Práticas Utilizadas

Durante o desenvolvimento foram adotadas algumas boas práticas importantes:

* Organização dos arquivos em pastas.
* Nomes de variáveis e funções descritivos.
* Código limpo e organizado.
* Reutilização de código sempre que possível.
* Comentários em partes importantes da aplicação.
* Layout consistente entre todas as páginas.

---

## Versionamento

Todo o desenvolvimento foi realizado utilizando **Git** para controle de versão.

O projeto foi hospedado no **GitHub**, permitindo acompanhar toda a evolução através do histórico de commits.

---

## Publicação

A aplicação foi publicada utilizando o **GitHub Pages**, permitindo acesso direto pelo navegador sem necessidade de instalação.

---

## Aprendizados

Durante este projeto foi possível praticar diversos conceitos importantes do desenvolvimento web, como:

* Estruturação de páginas HTML.
* Estilização com CSS.
* Manipulação do DOM utilizando JavaScript.
* Validação de formulários.
* Consumo de APIs utilizando Fetch.
* Organização de código.
* Responsividade.
* Versionamento com Git.
* Publicação utilizando GitHub Pages.

---

## Considerações Finais

Este projeto representa uma aplicação prática dos conteúdos estudados durante a disciplina, demonstrando como tecnologias web podem ser utilizadas para solucionar problemas reais.

Além de desenvolver habilidades técnicas, o projeto também evidencia a importância da tecnologia como ferramenta de apoio para instituições sociais, facilitando a conexão entre quem precisa de ajuda e quem deseja contribuir com a comunidade.



Desenvolvedor

Projeto desenvolvido por Nicollas Azalim como atividade acadêmica, aplicando os conhecimentos de HTML, CSS, JavaScript, consumo de APIs, Git e GitHub para a construção de uma plataforma voltada à conexão entre instituições sociais e voluntários.