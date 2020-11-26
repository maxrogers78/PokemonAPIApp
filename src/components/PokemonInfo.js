import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PokemonInfo = (props) => {
  const { name, sprites, abilities } = props.location.state.pokemonData;

  return (
    <Info>
      <Link className="go-back" to="/">
        <i class="fas fa-arrow-left"></i> Go Back
      </Link>
      <h3>{name}</h3>
      <img src={sprites.front_default} alt={name} />
      <div>
        <h4>Abilities</h4>
        {abilities.map((item, i) => (
          <p key={i}>{item.ability.name}</p>
        ))}
      </div>
    </Info>
  );
};

const Info = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  .go-back {
    position: absolute;
    top: 3%;
    left: 3%;
    font-size: 20px;
    font-weight: normal;
    text-decoration: none;
    padding: 5px 9px;
    border: 1px solid #333;
    border-radius: 10px;
    color: #333;
  }

  h3 {
    font-size: 70px;
    font-weight: 300;
    text-transform: uppercase;
  }

  h4 {
    font-size: 50px;
    font-weight: normal;
    text-transform: uppercase;
  }

  img {
    width: 350px;
    height: 350px;
    align-self: center;
  }

  p {
    font-size: 28px;
    font-weight: 300;
  }
`;

export default PokemonInfo;
