const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolver = require('./graphql/resolver/index');

const app = express();

app.use(bodyParser.json());

app.use(
    '/graphql', 
    graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolver,
    graphiql: true
    })
);

mongoose.connect(
    `mongodb+srv://user:xziS4WoLu0MqFXxC@cluster0-ewrgw.mongodb.net/events-react-dev?retryWrites=true&w=majority`
    ).then(() => {
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    });
