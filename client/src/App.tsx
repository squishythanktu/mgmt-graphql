import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import useRouteElements from "./useRouteElements";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(_existing, incoming) {
            return incoming;
          },
        },
        project: {
          merge(_existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});

function App() {
  const routeElements = useRouteElements();

  return (
    <>
      <ApolloProvider client={client}>{routeElements}</ApolloProvider>
    </>
  );
}

export default App;
