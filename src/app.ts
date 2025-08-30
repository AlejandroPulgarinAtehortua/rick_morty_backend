import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import loggerMiddleware from './middleware/logger';
import bodyParser from 'body-parser';


export async function startServer() {
const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware);


const apollo = new ApolloServer({ typeDefs, resolvers });
await apollo.start();
apollo.applyMiddleware({ app: app as any, path: '/graphql' });


return app;
}
