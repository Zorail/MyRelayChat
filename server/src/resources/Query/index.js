import {
  GraphQLObjectType
} from 'graphql'

import * as UserQuery from '../User/user.resolver.query';
import * as ThreadQuery from '../Thread/thread.resolver.query';
import * as MessageQuery from '../Message/message.resolver.query';

import {
  GraphQLUser
} from '../User/user.userType'

import {
  nodeField
} from '../Util/nodeDefinitions'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: GraphQLUser,
      resolve: () => {
        // get currentAuthenticatedUser
        return UserQuery.getCurrentUser()
      }
    },
    node: nodeField
  }
})

export {
  UserQuery,
  ThreadQuery,
  MessageQuery,
  Query
}