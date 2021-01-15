import graphql from 'graphql';

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat} = graphql;

const ProductType = new GraphQLObjectType ({
    name: 'ProductType',
    fields: ()=> ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        price: {type: GraphQLFloat},
        description: {type: GraphQLString},
        imageUrl: {type: GraphQLString}
    })
});

export default ProductType;
    
