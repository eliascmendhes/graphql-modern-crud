// Importa o tipo noteType do arquivo nodeTypes
const { noteType } = require('../nodeTypes');

// Importa a classe GraphQLList do módulo graphql
const { GraphQLList } = require('graphql');

// Importa a classe NoteService do arquivo NoteService
const NoteService = require('../../services/NoteService');

// Define a query NotesQuery do GraphQL, que retorna uma lista de notas
const NotesQuery = {
  type: new GraphQLList(noteType), // Define o tipo de retorno como uma lista do tipo noteType
  args: {}, // Define que a query não recebe nenhum argumento
  resolve: async () => { // Define a função resolve que retorna todas as notas
    const noteService = new NoteService();
    const notes = await noteService.getAllNotes();

    return notes;
  }
};

// Exporta a query NotesQuery do GraphQL
module.exports = { NotesQuery };
