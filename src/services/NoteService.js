// Importa a classe MongoDbRepo do arquivo de repositório MongoDB
const MongoDbRepo = require('../repository/mongoDbRepository');

// Cria a classe NoteService
class NoteService {
  constructor() {

    // Cria um objeto de repositório MongoDB para a coleção "Notes"
    this.NoteRepository = new MongoDbRepo('Notes');
  }

  // Método para obter todas as notas
  getAllNotes() {
  
    return this.NoteRepository.getAll();
  }

  // Método para atualizar uma nota pelo ID
  updateNote(_id, opt) {
    return this.NoteRepository.updateOne(_id, opt);
  }

  // Método para deletar uma nota pelo ID
  deleteNote(_id) {
    return this.NoteRepository.deleteOne(_id);
  }

  // Método para criar uma nova nota
  createNote(opt) {
    return this.NoteRepository.create(opt);
  }
}

// Exporta a classe NoteService
module.exports = NoteService;
