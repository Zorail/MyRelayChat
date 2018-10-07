import {
  GraphQLSchema
} from 'graphql';

import {
  Query,
  Mutation,
  Subscription
} from './resources/graphQLTypes'

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
  // subscription: Subscription
})