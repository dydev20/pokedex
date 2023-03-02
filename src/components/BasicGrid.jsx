import React from "react"
import BasicCard from "./BasicCard"
import Box from '@mui/material/Box';

export default function BasicGrid(props){

    const [pokemon,setPokemon]=React.useState([])


    /* fetch data from api and set to state variable */
    React.useEffect(()=>{
        async function fetchPokemonData() {

            const response = await fetch("https://pokeapi.co/api/v2/generation/1/")
            const data = await response.json()
            
            /* get names of generation 1 pokemons */
            const pokemonNames=data.pokemon_species.map(species=>species.name)


            const pokemonData=await Promise.all(
                
                /* for each gen1 pokemon fetch data*/
                pokemonNames.map(async name =>{
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    const data = await response.json()
                    return data
                })
            )

           setPokemon(pokemonData)
        }

        fetchPokemonData()

    },[])

    
    return(
        <Box 
            sx={{ 
                display:"grid",
                gridTemplateColumns:{
                    xs:"minmax(200px,1fr)",
                    sm:"repeat(2,1fr)",
                    md:"repeat(3,1fr)",
                    lg:"repeat(4,1fr)"
                },
                gap:5,
                padding:2
                
            }}
        >
           

            {/* display all pokemon cards or only display pokemon cards that match the search value */}
            {pokemon.filter(pokemon=>{

                const lowerCaseSearchValue = props.searchValue.toLowerCase(); 
                return lowerCaseSearchValue === "" ? pokemon : pokemon.name.includes(lowerCaseSearchValue);
                
                
            }).map(pokemon=>{
                return(
                    <BasicCard
                        key={pokemon.name}
                        img={pokemon.sprites.front_default}
                        types={pokemon.types} 
                        name={pokemon.name} 
                        stats={pokemon.stats}
                    />
                )
            })}

            
        </Box>
    )
}