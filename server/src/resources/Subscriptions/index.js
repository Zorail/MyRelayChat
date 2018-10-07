import {
  GraphQLObjectType
} from 'graphql'

const Subscription = new GraphQLObjectType({
  name: 'Subscription',
  fields: () => ({

  })
})

export {
  Subscription
}