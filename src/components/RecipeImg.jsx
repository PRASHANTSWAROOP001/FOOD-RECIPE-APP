

function RecipeImage (){

  return (

    <div className=' w-72 h-fit'>

         <img
        className="w-full h-52 rounded-t-xl"
        src={image_url}
        alt="recipe-image"
      />

      <div className="w-full">
        <h1 className=" px-2 py-2">{title}</h1>
      </div>




    </div>



  )

}