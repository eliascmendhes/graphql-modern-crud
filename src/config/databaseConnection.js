// Importa a classe MongoClient do módulo mongodb
const MongoClient = require('mongodb').MongoClient;

let mongoDB;

// Define a função setupDB que conecta ao banco de dados MongoDB
const setupDB = async() => {
  const uri = 'mongodb+srv://<username>:<senha>@<bancodedadosmongo>.smkwhzy.mongodb.net/?retryWrites=true&w=majority'

  // Conecta ao banco de dados MongoDB com as opções useNewUrlParser e useUnifiedTopology
  mongoDB = await MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
};

// Define a função getDB que retorna o banco de dados atual
const getDB = () => {
   return mongoDB.db("dbTest")
};

// Exporta as funções setupDB e getDB para serem utilizadas em outras partes da aplicação
module.exports = { setupDB, getDB };
