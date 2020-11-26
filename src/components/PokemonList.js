import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemones }) => {
  return (
    <List>
      {pokemones.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 30px;
  width: 100%;
`;

export default PokemonList;
