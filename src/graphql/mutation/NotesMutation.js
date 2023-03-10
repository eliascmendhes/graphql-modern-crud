// Importa o tipo noteType do arquivo nodeTypes
const { noteType } = require('../nodeTypes');

// Importa as classes GraphQLString, GraphQLBoolean, GraphQLInt e GraphQLID do módulo graphql
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID
} = require('graphql');

// Importa a classe NoteService do arquivo NoteService
const NoteService = require('../../services/NoteService');

// Define a mutation CreateNoteMutation do GraphQL, que cria uma nova nota
const CreateNoteMutation = {
  type: noteType, // Define o tipo de retorno como noteType
  args: {
    content: { type: GraphQLString } // Define o argumento "content" do tipo GraphQLString
  },
  resolve: async (_, { content }) => { // Define a função resolve que cria uma nova nota com o conteúdo fornecido
    const noteService = new NoteService();
    const newNote = await noteService.createNote({ content });

    return newNote;
  }
};

// Define a mutation DeleteNoteMutation do GraphQL, que deleta uma nota
const DeleteNoteMutation = {
  type: GraphQLID, // Define o tipo de retorno como GraphQLID
  args: {
    _id: { type: GraphQLID } // Define o argumento "_id" do tipo GraphQLID
  },
  resolve: async (_, { _id }) => { // Define a função resolve que deleta uma nota com o ID fornecido
    const noteService = new NoteService();
    const res = await noteService.deleteNote(_id);

    if (res.ok) {
      return _id;
    }
  }
};

// Define a mutation UpdateNoteMutation do GraphQL, que atualiza uma nota
const UpdateNoteMutation = {
  type: noteType, // Define o tipo de retorno como noteType
  args: {
    _id: { type: GraphQLID }, // Define o argumento "_id" do tipo GraphQLID
    content: { type: GraphQLString } // Define o argumento "content" do tipo GraphQLString
  },
  resolve: async (_, { _id, content }) => { // Define a função resolve que atualiza uma nota com o ID fornecido e o conteúdo fornecido
    const noteService = new NoteService();
    const updatedNote = await noteService.updateNote(_id, { content });

    return updatedNote;
  }
};

// Exporta as mutations CreateNoteMutation, UpdateNoteMutation e DeleteNoteMutation do GraphQL
module.exports = { CreateNoteMutation, UpdateNoteMutation, DeleteNoteMutation };
