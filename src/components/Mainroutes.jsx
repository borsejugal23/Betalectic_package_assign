import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Favourite from './Favourite';

function Mainroutes() {
  return (
    <div className="Mainroutes">
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/favourite"} element={<Favourite/>}/>
      </Routes>
    </div>
  );
}

export default Mainroutes;
