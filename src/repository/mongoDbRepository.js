// Importa a função getDB do arquivo de conexão com o banco de dados
const { getDB } = require('../config/databaseConnection');

// Importa a classe ObjectId do módulo MongoDB
const ObjectId = require('mongodb').ObjectId;

// Cria a classe MongoDbRepo
class MongoDbRepo {
  constructor(collectionName) {

    // Obtém a coleção do banco de dados com o nome fornecido
    this.collection = getDB().collection(collectionName);
  }

  // Método para obter todos os documentos da coleção
  getAll() {
    return new Promise((resolve, reject) => {

      // Realiza uma consulta na coleção e retorna um array com os documentos
      this.collection.find({}).toArray((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  // Método para obter um documento pelo ID
  geById(_id) {
    return new Promise((resolve, reject) => {

      // Realiza uma consulta na coleção e retorna um documento com o ID fornecido
      this.collection.findOne({ _id: ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  // Método para atualizar um documento pelo ID
  updateOne(_id, opt) {
    return new Promise((resolve, reject) => {

      // Atualiza um documento com o ID fornecido com os valores fornecidos
      this.collection.findOneAndUpdate(
        { _id: ObjectId(_id) },
        { $set: opt },
        { returnOriginal: false },
        (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data.value);
        }
      );
    });
  }

  // Método para deletar um documento pelo ID
  deleteOne(_id) {
    return new Promise((resolve, reject) => {

      // Deleta um documento com o ID fornecido
      this.collection.findOneAndDelete({ _id: ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  // Método para criar um novo documento
  create(opt) {
    return new Promise((resolve, reject) => {

      // Insere um novo documento na coleção com os valores fornecidos
      this.collection.insertOne(opt, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
      1;
    });
  }
}

// Exporta a classe MongoDbRepo
module.exports = MongoDbRepo;
