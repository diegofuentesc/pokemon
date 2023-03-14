import React, { useEffect, useState } from 'react'
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';



const Pokemones = () => {
 const [idPokemon, setIdPokemon] = useState("");
 const [lstPokemones, setLstPokemones] = useState([]);
 const navigate = useNavigate();

 
 const getPokemones = async () =>{
   const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
   const data = await res.json();


   
   let dataSelect = [];
   data.results.map((pokemon) => {
    dataSelect.push({url: pokemon.url, nombre: pokemon.name});
    

    
   });
 
   setLstPokemones(dataSelect);

 }

 const verDetalle = () => {
 
  let id = idPokemon.replace('https://pokeapi.co/api/v2/pokemon/','');
  id = id.replace ('/','');
  navigate(`/pokemones/${id}`);

 }

 useEffect(() => {
   
 getPokemones();
 }, [])
 

  return (
    <div className='vPokemones'>
      <h1>Selecciona tu pokemon</h1>
      <select name="id" id="id" onChange={(e)=> setIdPokemon(e.target.value)}> 
      <option value="" >Pokemones</option>
        {
          lstPokemones.map((p) => <option key={p.url} value={p.url} >{p.nombre}</option>)
        }
      </select>
      <button type="button" class="btn btn-dark" onClick={(e) => verDetalle()}>Detalle</button>
    </div>
  )
}

export default Pokemones