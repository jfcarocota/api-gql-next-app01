import graphql from 'graphql';
import Product from '../models/Product.js';
import ProductType from './ProductType.js';

const {GraphQLObjectType, GraphQLList, GraphQLID} = graphql;

const  query = new GraphQLObjectType ({
    name: 'Query',
    fields: {
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return Product.find();
            }
        },
        getProductById: {
            type: ProductType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Product.findById(args.id);
            }
        }
    }
});
    


export default query;