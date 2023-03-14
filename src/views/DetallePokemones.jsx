import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetallePokemones = () => {

  const [pokemon, setPokemon] = useState({});
  const [cargando, setCargando] = useState(true);


  const {id} = useParams();

  const getPokemon = async () => {

    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    setPokemon(data);
    setCargando(false);
  }

  
  useEffect(() => {
    getPokemon();
    
    
  }, [])
  
  return (
    cargando?
    <h1>Cargando datos...</h1>:
    <div className='todoDetalle'>
    <div className='vDetalle'>
    <div>
      <img  className="imgPokemon" src={pokemon.sprites.back_default} alt="pokemon"></img>
    </div>
      <div>
        <ul>
          <h3>{pokemon.name}</h3> 
          <li><p>hp: {pokemon.stats[0].base_stat} </p></li>
          <li><p>attack: {pokemon.stats[1].base_stat} </p></li>
          <li><p>defense: {pokemon.stats[2].base_stat} </p></li>
          <li><p>special-attack: {pokemon.stats[3].base_stat} </p></li>
          <li><p>special-defense: {pokemon.stats[4].base_stat} </p></li>
          <li><p>speed: {pokemon.stats[5].base_stat} </p></li>
        </ul>
      </div>  
    </div>
    </div>
  )
  }


export default DetallePokemones