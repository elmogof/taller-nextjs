import { createSlice, createAsyncThunk } from '@reduxjs/toolkkit';
import { getPokemonList } from '../../data/PokemonAPI';

const initialState = {
    pokemonList: null,
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
    intialState: initialState,
    reducers: {
        deleteAPokemon: (state, action) => {
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
        [getPokemonListAsync.fullfilled]: (state, action) => {
            state.pokemonList = action.payload;
        }
    }
})

export const { deleteAPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
