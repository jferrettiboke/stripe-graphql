import { ApolloServer } from "apollo-server";
import schema from "./schema";
import stripe from "./stripe";
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import client from "./client";

dotenv.config({ path: __dirname + "/../../.env" })
const jwt_secret:any = JSON.parse(process.env.HASURA_GRAPHQL_JWT_SECRET!)


function verifyJwtToken(token: string) {
  return verify(
    token.replace("Bearer ", ""),
    jwt_secret.key,
    {
      algorithms: jwt_secret.type
    },
    function(err, decoded) {
      if (err) {
        return false
      }
      if (decoded) {
        return decoded
      }
      return false
    }
  )
}

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token:string = req.headers.authorization! || ''
    const verifiedToken: any = verifyJwtToken(token)
    let userId = null
    let role = null

    if (verifiedToken) {
      userId = verifiedToken[jwt_secret.claims_namespace]['x-hasura-user-id']
      role = verifiedToken[jwt_secret.claims_namespace]['x-hasura-default-role']
    }

    if (req.headers['x-hasura-role'] === 'admin') role = 'admin'

    return { stripe, userId, role }
  }
});

const port = process.env.PORT || 4000;

server.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
