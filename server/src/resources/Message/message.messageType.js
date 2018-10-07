import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import {
  fromGlobalId,
  globalIdField,
  connectionDefinitions
} from 'graphql-relay'

import {
  nodeInterface
} from '../Util/nodeDefinitions'

const GraphQLMessage = new GraphQLObjectType({
  name: 'Message',
  fields: {
    id: globalIdField('Message'),
    authorName: {
      type: GraphQLString,
      resolve: (obj) => obj.authorName
    },
    text: {
      type: GraphQLString,
      resolve: (obj) => obj.text
    },
    timestamp: {
      type: GraphQLInt,
      resolve: (obj) => obj.timestamp
    }
  },
  interfaces: [nodeInterface]
})

const {
  connectionType: MessageConnection,
  edgeType: GraphQLMessageEdge
} = connectionDefinitions({
  name: 'Message',
  nodeType: GraphQLMessage
})

export {
  GraphQLMessage,
  GraphQLMessageEdge,
  MessageConnection
}