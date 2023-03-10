// Importa as classes GraphQLSchema e GraphQLObjectType do módulo graphql
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

// Importa a query NotesQuery e as mutations CreateNoteMutation, UpdateNoteMutation e DeleteNoteMutation
const { NotesQuery } = require('./query/NotesQuery');
const {
  CreateNoteMutation,
  UpdateNoteMutation,
  DeleteNoteMutation
} = require('./mutation/NotesMutation');

// Define o tipo Query, que encapsula as operações de consulta do GraphQL
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    notes: NotesQuery // Adiciona a query NotesQuery ao tipo Query
  })
});

// Define o tipo Mutation, que encapsula as operações de modificação do GraphQL
const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createNote: CreateNoteMutation, // Adiciona a mutation CreateNoteMutation ao tipo Mutation
    deleteNote: DeleteNoteMutation, // Adiciona a mutation DeleteNoteMutation ao tipo Mutation
    updateNote: UpdateNoteMutation // Adiciona a mutation UpdateNoteMutation ao tipo Mutation
  })
});

// Cria o esquema GraphQL com os tipos Query e Mutation definidos
const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

// Exporta o esquema GraphQL
module.exports = schema;
