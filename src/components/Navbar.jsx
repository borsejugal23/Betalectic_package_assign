import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="flex items-center justify-evenly">
      
      <Link to={"/"} className="mr-4 text-blue-500">Homepage</Link>
      <Link to={"/Fav"} className="text-blue-500">Favourite</Link>
    </div>
  );
}

export default Nav;
