import react from 'react';

import { useSelector } from 'react-redux';
import DelCard from '../components/DeleteCard';

const MyFavRecipe = () => {
  const { favRecipe } = useSelector((state) => state.recipe);

  return (

    <div className ='w-full h-screen '>

      <h1 className='text-center text-2xl py-2 '> Welcome to Favourite Recipe Page </h1>

      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-x-14 gap-y-10 pt-5 pb-10 ">
      
      {favRecipe.map((recipe) => (
        <DelCard
          id={recipe.id}
          key={recipe.id}
          image_url={recipe.image_url}
          title={recipe.title}
        />
      ))}
    </div>

    </div>

  );
};

export default MyFavRecipe;
