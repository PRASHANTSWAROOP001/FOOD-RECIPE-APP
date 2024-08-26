import { useState } from 'react';
import Navbar from './components/NavBar.jsx';
import Home from './pages/Home';
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import MyFavRecipe from './pages/MyFavRecipe.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen">
      <Navbar />
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Recipe/:id" element={<Recipe />} />
        <Route path="/MyFavRecipe" element={<MyFavRecipe />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Error Route | Route Not Defined</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
