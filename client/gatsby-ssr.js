import React from "react"
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import fetch from "isomorphic-fetch"

// Apollo Client
const client = new ApolloClient({
    link: new HttpLink({
        fetch,
        uri: `${process.env.GATSBY_STRAPI_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => <ApolloProvider client={client}>{element}</ApolloProvider>
