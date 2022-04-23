import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PokemonListComponent = () => {

    useEffect(() => {
    }, [])

    return (
        <div>
            <ul>
                {
                    pokemonList === null ?
                        <h1>Cargando...</h1> :
                        pokemonList.map((pokemon, index) => {
                            return (
                                <li key={index} >
                                    <p>
                                        <a style={{ color: index <= 2 ? 'green' : (index > 2 && index <= 5 ? 'orange' : 'blue') }} href={pokemon.url}>{pokemon.name}</a>
                                    </p>
                                </li>
                            )
                        })
                }
            </ul>
        </div>
    )
}

export default PokemonListComponent