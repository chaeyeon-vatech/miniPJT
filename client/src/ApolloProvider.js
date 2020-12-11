import React from 'react';
import App from './App';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';
import {setContext} from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: ''
});

const client = new ApolloClient({
    link: httpLink
});

export default (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);