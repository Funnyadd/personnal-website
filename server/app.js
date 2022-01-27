var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { schema, root} = require('./schema');
var app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }));
//app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

