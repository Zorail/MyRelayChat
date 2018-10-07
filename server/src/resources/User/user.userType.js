import {
  GraphQLObjectType,
} from 'graphql';

import {
  globalIdField,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay'

import {
  nodeInterface
} from '../Util/nodeDefinitions'

import {
  ThreadQuery
} from '../Query'

import {
  ThreadConnection
} from '../Thread/thread.threadType'

const GraphQLUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    threads: {
      type: ThreadConnection,
      args: connectionArgs,
      resolve: (user, args) => {
        return connectionFromArray(ThreadQuery.getThreadsByUserId(user.id), args);
      }
    }
  },
  interfaces: [nodeInterface]
})

export {
  GraphQLUser
}