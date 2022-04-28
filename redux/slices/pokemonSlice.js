import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList } from '../../data/PokemonAPI';

const initialState = {
    pokemonList: [],
}

export const getPokemonListAsync = createAsyncThunk(
    'pokemon/getPokemonListAsync',
    async () => {
        const data = await getPokemonList();
        return data;
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        deleteAPokemon: (state, action) => { //pokemon/deleteAPokemon
            const name = action.payload;
            const newPokemonList = state.pokemonList.filter(pokemon => {
                if (pokemon.name !== name) {
                    return pokemon;
                }
            });
            state.pokemonList = newPokemonList;
        }
    },
    extraReducers: {
        [getPokemonListAsync.fulfilled]: (state, action) => {
            state.pokemonList = action.payload;
        }
    }
})

export const { deleteAPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
