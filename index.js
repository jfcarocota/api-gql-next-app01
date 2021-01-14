import express from "express";
import expressGraphql from "express-graphql";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors);

const {graphqlHTTP} = expressGraphql;

const connectionSctring = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ecommerce.tm80d.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(
    connectionSctring, 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
).then(()=> console.log('connected'))
.catch(err => console.log(`[Error]: ${err}`));

app.use('/graphql', graphqlHTTP({
    schema: null,
    graphiql: true
}));

app.listen(process.env.PORT, console.log(`server ready at: http://${process.env.HOST}:${process.env.PORT}/graphql`))