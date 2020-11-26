import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PokemonList from "./PokemonList";

const Home = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const [pokemones, setPokemones] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setPokemones(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>Pokemon API App</h1>
      {pokemones && <PokemonList pokemones={pokemones} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;

  h1 {
    text-align: center;
    margin: 30px 0;
    font-size: 60px;
    font-weight: 400;
  }
`;

export default Home;
