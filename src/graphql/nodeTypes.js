// Importa as classes GraphQLObjectType, GraphQLID e GraphQLString do módulo graphql
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

// Cria o tipo Note do GraphQL, que encapsula as informações de uma nota
const noteType = new GraphQLObjectType({
  name: 'Note',
  fields: {
    _id: { type: GraphQLID }, // Campo para o ID da nota, do tipo GraphQLID
    content: { type: GraphQLString } // Campo para o conteúdo da nota, do tipo GraphQLString
  }
});

// Exporta o tipo Note do GraphQL
module.exports = { noteType };
