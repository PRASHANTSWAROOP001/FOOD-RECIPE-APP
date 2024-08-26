import {configureStore} from "@reduxjs/toolkit"
import recipeReducers from "../features/favouriteRecipe"



const store = configureStore({
  reducer: {
      recipe: recipeReducers,
  },
})

export default store 