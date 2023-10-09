import React from "react"
import '../src/styles/index.scss';
import { ApolloProvider } from "@apollo/client";
import client from "@/src/apollo/client";


export default function About() {
    return (
        <ApolloProvider client={client}>
            
        </ApolloProvider>
        <div>About Us</div>
    )
}