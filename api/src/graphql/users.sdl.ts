export const schema = gql`
  type User {
    id: String!
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  type Query {
    users: [User!]! @requireAuth(roles: "admin")
    user(id: String!): User @requireAuth(roles: "admin")
  }

  input CreateUserInput {
    email: String!
    password: String!
    role: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth(roles: "admin")
    updateUser(id: String!, input: UpdateUserInput!): User!
      @requireAuth(roles: "admin")
    deleteUser(id: String!): User! @requireAuth(roles: "admin")
  }
`
