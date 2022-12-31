import React from "react"
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    HttpLink,
} from "@apollo/client"
import fetch from "isomorphic-fetch"

const checkIfLocal = () => {
    fetch(process.env.GATSBY_STRAPI_URL, { method: 'HEAD', signal: Timeout(2).signal })
    .then(res => {
        console.log('chu cool')
        return process.env.GATSBY_STRAPI_URL
    })
    .catch(err => {
        console.log('t cool')
        return 'http://127.0.0.1:1338'
    })
    return 'http://127.0.0.1:1338'
}

const Timeout = (time) => {
	let controller = new AbortController();
	setTimeout(() => controller.abort(), time * 1000);
	return controller;
};

const client = new ApolloClient({
    link: new HttpLink({
        fetch,
        uri: `${checkIfLocal()}/graphql`,
    }),
    cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
)
