# Projeto BeTalent

## Visão Geral
O projeto BeTalent é uma aplicação desenvolvida em React para exibir uma tabela interativa de funcionários com informações como nome, cargo, data de admissão, telefone e imagem. Os dados são consumidos de uma API local.

## Tecnologias Utilizadas
- **React**: Biblioteca principal para desenvolvimento da interface.
- **Axios**: Cliente HTTP para consumir a API.
- **React Data Table Component**: Biblioteca para exibir e gerenciar a tabela de dados.
- **CSS**: Para estilização da interface.

## Instalação e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-repositorio/betalent.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd betalent
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute a aplicação:
   ```sh
   npm run dev
   ```

## Estrutura do Projeto
```
BeTalent/
├── src/
│   ├── assets/        # Imagens e recursos
│   ├── components/    # Componentes reutilizáveis
│   ├── App.js         # Componente principal da aplicação
│   ├── App.css        # Estilização global
│   ├── index.js       # Arquivo de entrada
├── public/            # Arquivos públicos
├── package.json       # Dependências e scripts
├── README.md          # Documentação
```

## Funcionalidades
- **Consulta de API**: Obtém os dados dos funcionários a partir da API local.
- **Exibição na Tabela**: Apresenta os dados com opção de ordenação e formatação personalizada.
- **Pesquisa Dinâmica**: Permite filtrar por nome, cargo ou telefone.
- **Paginação**: Personalizada com tradução para português.

## API
A API deve estar rodando em `http://localhost:3000/employees/`, retornando um JSON no seguinte formato:
```json
[
  {
    "id": 1,
    "image": "https://example.com/image.jpg",
    "name": "João Silva",
    "job": "Desenvolvedor",
    "admission_date": "2023-05-10",
    "phone": "11987654321"
  }
]
```

## Personalização
- **Modificar a API**: Alterar a URL em `fetchData` dentro de `App.js`.
- **Modificar o Layout**: Editar `App.css` para mudar o estilo da tabela e elementos visuais.

## Possíveis Melhorias Futuras
- Implementar autenticação de usuário.
- Permitir edição e remoção de funcionários.
- Melhorar a responsividade da interface.

## Autor
Desenvolvido por [Seu Nome].

#   P r o j e t o - B e T a l e n t 
 
 
