import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import { createServer } from 'http';

// Graphql specs
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import { schema } from './graphql';

const GRAPHQL_PORT = 3000;

// Expossing a graphql endpoint
let graphQLServer = express()

graphQLServer.use('/', express.static(path.resolve(__dirname, 'public')));
graphQLServer.use('/graphql', 
  graphQLHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
  })
)

// Creating a combined server with subscription support

let ws = createServer(graphQLServer);

ws.listen(GRAPHQL_PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`)
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions'
  });
})