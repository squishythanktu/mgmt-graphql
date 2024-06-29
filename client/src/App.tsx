import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "./components/Header/Header";
import Clients from "./components/Clients/Clients";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container mx-auto mt-10">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
