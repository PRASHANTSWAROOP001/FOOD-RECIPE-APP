import { useState, react } from 'react';
import Card from '../components/Card.jsx';
import { getRecipe } from '../features/favouriteRecipe';

import { useSelector, useDispatch } from 'react-redux';


function Home() {
  const [recipe, setRecipe] = useState('');

  const { status, items, error } = useSelector((state) => state.recipe);

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (recipe.trim != '') {
      dispatch(getRecipe(recipe));
    }
  };

  const handleEnter = (event) =>{
    if (event.key === "Enter" && recipe.length >= 3){
      dispatch(getRecipe(recipe))
    }
    else if(event.key === "Enter" && recipe.length <3){
      alert("Add At Least Three Words\n")
    }

  }

  return (
    <div className="w-full h-screen">
      <div className="w-full flex justify-center gap-4 py-2">
        <input
          type="text"
          className="w-[40%] h-12 border-2 rounded-xl px-2 py-1 text-lg outline-none"
          placeholder="Search Your Recipe"
          onChange={(e) => setRecipe(e.currentTarget.value)}
          onKeyDown={(event)=>{handleEnter(event)}}
        />
        <button
          className="px-4 py-2 bg-green-400 hover:bg-green-300 text-white rounded-lg font-semibold "
          onClick={handleSearch}
        >
          {' '}
          Search{' '}
        </button>
      </div>

      <div className="w-full ">
        {status === 'Idle' && (
          <h1 className=" text-2xl text-center text-gray-400">
            {' '}
            Search Your Recipe{' '}
          </h1>
        )}
        {status === 'Loading' && (
          <h1 className=" text-2xl text-center text-gray-600 "> Loading </h1>
        )}
        {status === 'Failed' && (
          <h1 className=" text-2xl text-center text-red-500 ">
            {' '}
            Error: {error}{' '}
          </h1>
        )}
      </div>

      <section className=" w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-x-14 gap-y-10 pt-5 pb-10">
        {status === 'Success' &&
          items.results > 0 &&
          items.data.recipes.map((recipe) => (
            <Card
              id={recipe.id}
              key={recipe.id}
              image_url={recipe.image_url}
              title={recipe.title}
            />
          ))}

        {status === 'Success' && items.results == 0 && (
          <div>
            {' '}
            <h1 className="text-center text-xl text-orange-400">
              {' '}
              No Result Found
            </h1>{' '}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
