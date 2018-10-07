import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay'

import { 
  UserQuery,
  ThreadQuery,
  MessageQuery
} from '../Query/index'

import {
  GraphQLMessage,
  GraphQLThread,
  GraphQLUser
} from '../graphQLTypes'

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId)
    if(type === 'Message') {
      return MessageQuery.getMessage(id);
    } else if(type === 'Thread') {
      return ThreadQuery.getThread(id);
    } else if(type === 'User') {
      return UserQuery.getUser(id);
    }
    return null;
  },
  obj => {
    // if(obj instanceof )
    if(obj instanceof 'Message') {
      return GraphQLMessage;
    } else if(obj instanceof 'Thread') {
      return GraphQLThread;
    } else if(obj instanceof 'User') {
      return GraphQLUser
    }
    return null;
  }
)

export {
  nodeInterface,
  nodeField
}