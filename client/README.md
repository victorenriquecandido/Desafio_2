# Primeiro Desafio
<p>Este desafio tem como objetivo verificar a auto-organização e dedicação do futuro
membro do time do Grupo ICTS.</p>

## Escopo
<p>Este desafio consiste na implementação de um sistema (front-end, back-end e
integração com o banco de dados) que gerencia pedidos e itens, desta forma,
deve ser entregue um CRUD de Item e um CRUD de Pedido e sendo possível
importar arquivos .txt inserindo na tabela de Itens, ambos utilizando os endpoints
no padrão REST. Deve-se implementar o modelo entidade-relacionamento a
seguir</p>

## Especificações
- As linguagens utilizadas para o desenvolvimento deste desafio são <b>React.js</b>, <b>Node.js</b> e
<b>MSSql.js</b>.
- Quaisquer decisões referentes a plugins, arquitetura, padrões
de codificação, controle de versão ou design de interface podem
ser decididos pelo desafiado.

## Arquiterura

```
📦src
 ┣ 📂component
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜styles.js
 ┃ ┗ 📂Modal
 ┃ ┃ ┗ 📜index.js
 ┣ 📂pages
 ┃ ┣ 📂Compras
 ┃ ┃ ┣ 📜Compras.css
 ┃ ┃ ┗ 📜Compras.js
 ┃ ┗ 📂Produtos
 ┃ ┃ ┣ 📜Produtos.css
 ┃ ┃ ┗ 📜Produtos.js
 ┣ 📂routers --> Rotas deste projeto.
 ┃ ┗ 📜index.js
 ┣ 📂service -->  Serviria para as conexões de cada API (1%)
 ┃ ┣ 📜api.js
 ┃ ┗ 📜conn.js
 ┣ 📜App.js
 ┣ 📜global.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
 ```
```
📦server
 ┗ 📜styles.js --> Conexão com o banco de dados
 
 ```
 ## Ferramentas Utilizadas

 - React.
 - Node.
 - MySql.
 - Visual Studio code.
 - Extensão Prettier.

 ##  Manual

1. Faça um clone do repositório no terminal.
   ```
   git clone https://github.com/victorenriquecandido/Desafio_2.git
   ```

2. Em seguida você precisa utilizar o comando 'yarn install' dentro da pasta client do projeto.
   ```
   yarn install
   ```

3. Em seguida você precisa utilizar o comando 'node index.js' dentro da pasta server do projeto.
   ```
   node index.js
   ```

4. Após a conclusão da instalação digite o comando 'yarn start'.
   ```
   yarn start
   ```

5. E com isso você verá a página solicitada no desafio, com a navegação em um simples header.
