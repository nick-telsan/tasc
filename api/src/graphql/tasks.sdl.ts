export const schema = gql`
  type Task {
    id: String!
    name: String!
    complete: Boolean!
    position: Int!
    userId: String!
    user: User!
  }

  type Query {
    tasks(userId: String!): [Task!]! @requireAuth
    task(id: String!, userId: String!): Task @requireAuth
  }

  input CreateTaskInput {
    name: String!
    userId: String!
  }

  input UpdateTaskInput {
    name: String
    complete: Boolean
    position: Int
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: String!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: String!): Task! @requireAuth
  }
`
