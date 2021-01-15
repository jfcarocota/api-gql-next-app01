import graphql from 'graphql';
import Product from '../models/Product.js';
import ProductType from './ProductType.js';

const {GraphQLObjectType, GraphQLString, GraphQLFloat} = graphql;


 const mutation = new GraphQLObjectType ({
    name: 'Mutation',
    fields: {
        addProduct: {
            type: ProductType,
            args: {
                name: {type: GraphQLString},
                price: {type: GraphQLFloat},
                description: {type: GraphQLString},
                imageUrl: {type: GraphQLString}
            },
            resolve(parent, args){
                const product = new Product(args);
                return product.save();
            }
        }
    }
});
    
export default mutation;