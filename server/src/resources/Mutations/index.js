import {
  GraphQLObjectType
} from 'graphql'

import {
  GraphQLAddMessageMutation
} from '../Message/message.resolver.mutation' 

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMessage: GraphQLAddMessageMutation
  }
})

export {
  Mutation
}