import graphql from 'graphql';
import Product from '../models/Product.js';
import ProductType from './ProductType.js';

const {GraphQLObjectType, GraphQLList} = graphql;

const  query = new GraphQLObjectType ({
    name: 'Query',
    fields: {
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return Product.find();
            }
        }
    }
});
    


export default query;