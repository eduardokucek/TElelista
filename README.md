TELELISTA - sua lista de contato

Para utilizar o software:

1. Faça o clone do repositório em seu computador
2. No PostgreSQL, crie um banco de dados
3. No diretório "back", crie um arquivo chamado ".env", seguindo o exemplo do arquivo ".env.example", onde será preenchido os dados de acesso ao banco de dados.
4. No terminal, acesse o diretório "back" e digite os seguintes comandos:

$ npm run typeorm migration:generate ./src/migrations/initialMigration -- -d ./src/data-source.ts

(Para gerar as migrações do banco de dados)

$ npm run typeorm migration:run -- -d ./src/data-source

(Para criar as tabelas do banco de dados)

$ npm i

(Para instalar as dependências do back end)

$ npm run dev

(Para iniciar o banco de dados)

4. Abra outro terminal, acesse o diretório "front" e digite:

$ npm i

(Para instalar as dependências do front end)

$ npm run dev

(Para iniciar o front end)

5. Feito isso, acesse o link apresentado no terminal (exemplo: http://localhost:5173/)
   Dessa forma, você terá acesso às funcionalidades do sistema.

Lembrando que é importante iniciar ambos os servidores do "front" e do "back" com o comando "npm run dev", cada qual em um terminal.

Bom proveito!
