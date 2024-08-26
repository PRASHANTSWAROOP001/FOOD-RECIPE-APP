import react from 'react';

import { useSelector } from 'react-redux';

import List from '../components/List';

const Recipe = () => {
  const { details, status, error } = useSelector(
    (state) => state.recipe.recipeDetails
  );

  if (status === 'Failed') {
    return <div>Some Error Happend : {error}</div>;
  }

  if (status === 'Loading') {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <div className="w-full h-screen">
      {status === 'Success' && (
        <section className=" flex  flex-col items-center gap-10 lg:items-start lg:flex-row w-full h-screen py-2">
          <div id="Image-Card" className=" w-72 h-fit bg-white ml-4 shadow-sm rounded-b-xl duration-500 hover:scale-105">
            <img
              className=" w-full h-60 rounded-t-xl"
              src={details.data.recipe.image_url}
              alt="Recipe Image"
            />

            <div>
              <h1 className="text-lg px-2 py-2">{details.data.recipe.title}</h1>
            </div>

            <div className=" w-full flex flex-row items-center justify-between px-2 py-2 ">
              <span className="text-sm text-gray-800">
                {' '}
                Cooking Time : {details.data.recipe.cooking_time}{' '}
              </span>
              <span className="text-sm text-gray-800">
                Serving: {details.data.recipe.servings}
              </span>
            </div>
          </div>

          <div className=" flex flex-grow flex flex-col items-center gap-2 ">
            <h1 className="text-center">Publisher : {details.data.recipe.publisher}</h1>
            <List key='101' description={"Ingredients"} quantity ={"Quantity"} unit ={"Unit"} />
            <ul className="flex flex-col gap-1 items-center w-full justify-center">
              {details.data.recipe.ingredients.map((ingredient) => (
                <li className='w-full flex items-center justify-center' key={ingredient.description}>

                  <List key={ingredient.description}  quantity = {ingredient.quantity} unit = {ingredient.unit} description={ingredient.description}/>
              
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default Recipe;
