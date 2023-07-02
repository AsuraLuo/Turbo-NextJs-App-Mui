"use client";

import React from "react";
import { ApolloLink, HttpLink, SuspenseCache } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
// import clientCookies from "js-cookie";

if (process.env.NODE_ENV === "development") {
  loadDevMessages();
  loadErrorMessages();
}

const ApolloProvider = ({ children }: React.PropsWithChildren) => {
  const makeClient = () => {
    const httpLink = new HttpLink({
      uri: "http://nexdev.mez100.com.cn/graphql",
      fetchOptions: { cache: "no-store" },
    });

    const delayLink = new ApolloLink((operation, forward) => {
      // const delay =
      //   typeof window === "undefined"
      //     ? delayProp
      //     : clientCookies.get("apollo-x-custom-delay") ?? delayProp;
      operation.setContext(({ headers = {} }) => {
        return {
          headers: {
            ...headers,
          },
        };
      });

      return forward(operation);
    });

    const link =
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: false,
              cutoffDelay: 100,
            }),
            delayLink,
            httpLink,
          ])
        : ApolloLink.from([delayLink, httpLink]);

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link,
    });
  };

  const makeSuspenseCache = () => {
    return new SuspenseCache();
  };

  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
};

export default ApolloProvider;
