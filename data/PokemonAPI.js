import axios from 'axios'

export const getPokemonList = async () => {
    const response = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=9');
    return response.data.results
}