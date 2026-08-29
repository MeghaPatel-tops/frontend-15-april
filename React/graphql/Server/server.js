const express = require("express");
// const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { default: axios } = require("axios");

const app = express();

// app.use(cors());
app.use(express.json());

const typeDefs = `#graphql
    type Product {
        id: ID!
        pname: String!
        price: Float!
        desc: String!
    }

    type Query {
        products: [Product!]
    }
    type Mutation{
        addProduct(pname:String!,price:Float!,desc:String!):Product
        deleteProduct(id:ID!):Boolean
        updateProduct(id:ID!,pname:String!,price:Float!,desc:String!):Product

    }

`;



const resolvers = {
    Query: {
        products: async()=>{
            try {
                let res = await axios.get('http://localhost:3000/products');
                console.log("here");
                
                return res.data;


            } catch (error) {
                console.log(error);
                
                return error
            }
        }
    },
    Mutation:{
        addProduct:async(_,args)=>{
            try {
                let res = await axios.post('http://localhost:3000/products',args);

            } catch (error) {
                return error
            }
        },
        deleteProduct:async(_,{id})=>{
            try {
                let res = await axios.delete(`http://localhost:3000/products/${id}`);
                return true
            } catch (error) {
                console.log(error);
                
                return false
            }
        },
         updateProduct:async(_,args)=>{
            try {
                let res = await axios.put('http://localhost:3000/products/'+args.id,args);

            } catch (error) {
                return error
            }
        },
    }
};

async function serverStart() {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        path: "/graphql"
    });

    app.listen(5000, () => {
        console.log("Server running on http://localhost:5000");
        console.log("GraphQL running on http://localhost:5000/graphql");
    });
}

serverStart();