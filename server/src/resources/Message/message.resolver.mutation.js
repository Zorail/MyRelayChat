import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'

import {
  mutationWithClientMutationId
} from 'graphql-relay';

import {
  GraphQLMessageEdge
} from './message.messageType'

const GraphQLAddMessageMutation = mutationWithClientMutationId({
  name: 'AddMessage',
  inputFields: {
    text: {
      type: new GraphQLNonNull(GraphQLString)
    },
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  outputFields: {
    messageEdge: {
      type: GraphQLMessageEdge,
      resolve: ({ messageId, threadID }) => {

      }
    }
  },
  mutateAndGetPayload: ({ text, id }) => {

  }
})

export {
  GraphQLAddMessageMutation
}