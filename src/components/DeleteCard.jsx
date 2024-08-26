import react from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRecipeDetails, deleteFav } from '../features/favouriteRecipe.js';

function DelCard({ image_url, title, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRecipe = (id) => {
    dispatch(getRecipeDetails(id));
    navigate(`/Recipe/${id}`);
  };

  const deleteFavRecipe = (id) => {
    dispatch(deleteFav(id));
  };

  return (
    <div className="w-72 h-fit rounded-b-xl bg-white duration-500 hover:scale-105 pb-2 shadow-sm ">
      <img
        className="w-full h-52 rounded-t-xl"
        src={image_url}
        alt="recipe-image"
      />
      <div className="w-full">
        <h1 className=" px-2 py-2">{title}</h1>
      </div>

      <div className="w-full flex justify-between px-2 ">
        <button
          onClick={() => deleteFavRecipe(id)}
          className=" px-3 py-2 bg-purple-300 hover:bg-purple-400"
        >
          Delete
        </button>
        <button
          onClick={() => handleRecipe(id)}
          className=" px-3 py-2 bg-violet-300 hover:bg-violet-400"
        >
          Recipe
        </button>
      </div>
    </div>
  );
}

export default DelCard;
