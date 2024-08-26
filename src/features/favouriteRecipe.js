import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRecipe = createAsyncThunk(
  'recipe/getRecipe', // Naming should match the slice name

  async (search) => {
    const responce = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${
        import.meta.env.VITE_REACT_RECIPE_API_KEY
      }`
    );
    const data = await responce.json();
    return data;
  }
);

export const getRecipeDetails = createAsyncThunk(
  'recipe/getRecipeDetails',

  async (recipeId) => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=${
        import.meta.env.VITE_REACT_RECIPE_API_KEY
      }`
    );

    const data = await response.json();

    return data;
  }
);

const recipeSlice = createSlice({
  name: 'recipe',

  initialState: {
    items: [],
    favRecipe: [],
    status: 'Idle', // idle | loading | succeeded | failed
    error: null,

    recipeDetails: {
      details: [],
      status: 'Idle',
      error: null,
    },
  },

  reducers: {

    addFav: (state, action) =>{
      state.favRecipe = [...state.favRecipe, action.payload]
    },

    deleteFav: (state,action) =>{
      state.favRecipe = state.favRecipe.filter((recipe)=>(recipe.id != action.payload))
    }

  },

  extraReducers: (builder) => {
    builder.addCase(getRecipe.pending, (state) => {
      state.status = 'Loading';
    });

    builder.addCase(getRecipe.fulfilled, (state, action) => {
      state.status = 'Success';
      state.items = action.payload;
    });

    builder.addCase(getRecipe.rejected, (state, action) => {
      state.status = 'Failed';
      state.error = action.error.message;
    });

    // builders for getRecipe

    builder.addCase(getRecipeDetails.pending, (state) => {
      state.recipeDetails.status = 'Loading';
    });

    builder.addCase(getRecipeDetails.fulfilled, (state, actions) => {
      state.recipeDetails.status = 'Success';
      state.recipeDetails.details = actions.payload;
    });

    builder.addCase(getRecipeDetails.rejected, (state, action) => {
      state.recipeDetails.status = 'Failed';
      state.recipeDetails.error = action.error.message;
    });
  },
});


export const {addFav, deleteFav} = recipeSlice.actions;

export default recipeSlice.reducer;
