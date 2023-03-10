// Importa as dependências necessárias para o servidor
const express = require('express');
const cors = require('cors');

// Importa o esquema do GraphQL que será utilizado
const schema = require('./graphql/schema');

// Importa o módulo para utilizar o GraphQL no Express
const { graphqlHTTP }  = require('express-graphql');

// Importa a função setupDB do arquivo de conexão com o banco de dados
const { setupDB } = require('./config/databaseConnection')

// Cria uma função auto-executável async
;(async () => {

  // Cria um objeto do Express
  const app = express();

  // Conecta-se ao banco de dados
  await setupDB()

  // Imprime no console a mensagem "DB OK"
  console.log('DB OK')

  // Configura o servidor para utilizar o CORS
  app.use(cors());

  // Configura o servidor para utilizar o GraphQL no endpoint "/graphql"
  app.use(
    '/graphql',
    graphqlHTTP({
      schema, // Utiliza o esquema do GraphQL importado
      graphiql: true, // Ativa o GraphiQL para teste da API
      pretty: true // Configura para que a saída do GraphQL seja formatada
    })
  );

  // Inicia o servidor na porta 4000 e imprime no console a mensagem "SERVER OK"
  app.listen(4000 , () => console.log('SERVER OK'));

})();
