import React from 'react';
import ApolloClient, { gql } from "apollo-boost";
import { useQuery, ApolloProvider } from "@apollo/react-hooks";

import Character from "./components/Character";
import Header from "./components/Header";


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/'
});

function App() {

  const Characters = () => {
    const query = gql`
      {
        characters {
          results {
            id
            name
            image
            origin {
              name
            }
            species
            gender
            status
            location {
              name
            }
          }
        }
      }
    `;

    const { loading, error, data } = useQuery(query);

    if (loading) return <p class="text-white">Loading...</p>;
    if (error) return <p> {error} </p>;

    return data.characters.results.map(character => <Character key={character.id} character={character} />);


  }

  return (
    <ApolloProvider client={client} >
      <Header />
      <div className="character-list  background-characters">
        <Characters />
      </div>
    </ApolloProvider>
  );
}

export default App;
