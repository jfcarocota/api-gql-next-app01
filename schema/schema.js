import graphql from 'graphql';
import mutation from './mutation.js';
import query from './query.js';

const {GraphQLSchema}  = graphql;

export default new GraphQLSchema({
    query,
    mutation
});