import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

import {
  globalIdField,
  connectionArgs,
  connectionFromArray,
  connectionDefinitions
} from 'graphql-relay'

import {
  nodeInterface
} from '../Util/nodeDefinitions'

import {
  MessageConnection
} from '../Message/message.messageType'

import {
  MessageQuery
} from '../Query'

const GraphQLThread = new GraphQLObjectType({
  name: 'Thread',
  fields: {
    id: globalIdField('Thread'),
    name: {
      type: GraphQLString,
      resolve: (obj) => obj.name
    },
    isRead: {
      type: GraphQLBoolean,
      resolve: (obj) => obj.isRead
    },
    lastUpdated: {
      type: GraphQLInt,
      resolve: (obj) => obj.lastUpdated
    },
    messages: {
      type: MessageConnection,
      args: connectionArgs,
      resolve: (thread, args) => {
        // get Messages through threadId
        return connectionFromArray(MessageQuery.getMessagesByThreadId(thread.id), args);
      }
    }
  },
  interfaces: [nodeInterface]
})

const {
  connectionType: ThreadConnection
} = connectionDefinitions({
  name: 'Thread',
  nodeType: GraphQLThread,
  connectionFields: () => ({
    unreadCount: {
      type: GraphQLInt,
      resolve: (conn) => {
        conn.edges.filter(edge => !edge.node.isRead).length
      }
    }
  })
})

export {
  GraphQLThread,
  ThreadConnection
}