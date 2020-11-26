import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const PokemonCard = ({ pokemon }) => {
  const { name } = pokemon;
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setPokemonData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {pokemonData && (
        <Card>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <Link
            className="button"
            to={{
              pathname: `/${pokemonData.name}`,
              state: {
                pokemonData,
              },
            }}
          >
            Ver Detalles
          </Link>
        </Card>
      )}
    </>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 300px;
  border: 1px solid #333;
  border-radius: 10px;
  margin: 20px;
  padding: 15px 20px;

  h3 {
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
  }

  img {
    width: 100%;
  }

  .button {
    color: #333;
    background-color: #fdd131;
    padding: 5px 7px;
    text-decoration: none;
    font-size: 24px;
    transition: filter 200ms ease-out;
  }

  .button:hover {
    filter: brightness(0.9);
  }
`;

export default PokemonCard;
