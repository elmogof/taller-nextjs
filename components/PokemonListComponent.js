import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonListAsync, deleteAPokemon } from '../redux/slices/pokemonSlice'

const PokemonListComponent = () => {
    const pokemonList = useSelector(state => state.pokemon.pokemonList);
    const dispatch = useDispatch();

    const getPokemonDataAsync = () => {
        dispatch(getPokemonListAsync()).then((response) => {
            console.log(response.payload);
        })
    }

    const deleteAPokemonByName = (name) => {
        dispatch(deleteAPokemon(name));
    }

    useEffect(() => {
        getPokemonDataAsync();
    }, [])

    return (
        <div>
            <ul>
                {
                    pokemonList.length <= 0 ?
                        <h1>Cargando...</h1> :
                        pokemonList.map((pokemon, index) => {
                            return (
                                <li key={index} >
                                    <div className='w-25 my-2'>
                                        <div className='row'>
                                            <div className='col'>
                                                <p>
                                                    <a style={{ color: index <= 2 ? 'green' : (index > 2 && index <= 5 ? 'orange' : 'blue') }} href={pokemon.url}>{pokemon.name}</a>
                                                </p>
                                            </div>
                                            <div className='col'>
                                                <button
                                                    type='button'
                                                    className='btn rounded-pill btn-outline-danger'
                                                    onClick={() => deleteAPokemonByName(pokemon.name)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                }
            </ul>
        </div>
    )
}

export default PokemonListComponent