import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonListAsync, deleteAPokemon } from '../redux/slices/pokemonSlice'

const PokemonListComponent = () => {
    const pokemonList = useSelector(state => state.pokemon.pokemonList);
    const dispatch = useDispatch();

    const getPokemonDataAsync = () => {
        dispatch(getPokemonListAsync()).then((response) => {
            console.log("Pokemon data:", response.payload);
        });
    }

    const deletePomekemon = (name) => {
        dispatch(deleteAPokemon(name));
    }

    useEffect(() => {
        getPokemonDataAsync();
    }, [])

    return (
        <div>
            <ul>
                {
                    pokemonList.length > 0 ?
                        pokemonList.map((pokemon, index) => {
                            return (
                                <li key={index} >
                                    <div className='my-2' style={{ width: '300px' }}>
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
                                                    onClick={() => deletePomekemon(pokemon.name)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }) :
                        <h1>Cargando...</h1>

                }
            </ul>
        </div>
    )
}

export default PokemonListComponent