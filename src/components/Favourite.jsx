import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Reusable";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);;
  const navigate=useNavigate()
  const storedFavorites = JSON.parse(localStorage.getItem("fav")) || [];

  useEffect(() => {
    setFavorites(storedFavorites);
  }, []);

  const handleDelete = (index) => {
    alert("Are you sure you want to delete")
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem("fav", JSON.stringify(updatedFavorites));
  };
  const handleSubmit=()=>{
    navigate("/")
  }
  if (storedFavorites.length === 0) {
    return (
      <div className="Favourite">
        <h1 className="m-16 py-1 ">Welcome to Favourite NPM Packages</h1>
        <div className="flex flex-col items-center justify-center border border-black w-80% h-64 m-16 py-1">
          <p className="mb-4">You don't have any favorites yet, please add</p>
          <Button
            classname={
              "w-1/7 bg-blue-600 hover:bg-blue-500 px-3 py-1 border-0 rounded text-white m-5"
            }
            text={"Add Fav"}
            handleSubmit={handleSubmit}

          />
        </div>
      </div>
    );
  } else {
  
    return (
      <div>
        <div className="flex justify-between  m-16 py-1 align-middle">
          <h1>Welcome to Favourite NPM Packages</h1>
         <Button
            classname={
              "w-1/7 bg-blue-600 hover:bg-blue-500 px-3 py-1 border-0 rounded text-white m-5"
            }
            text={"Add Fav"}
            handleSubmit={handleSubmit}

          />
        </div>
        <ul className="border border-black w-80% m-16 py-1">
          <div className="flex justify-around">
            <li><strong>Package name</strong></li>
            <li ><strong>Actions</strong></li>
          </div>
          {favorites.map((fav, index) => (
            <li key={index} className="flex items-center justify-between border-b border-gray-300 p-4">
              <span className="w-3/4">{fav}</span>
              <div className="w-1/4 flex items-center justify-end space-x-4">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(index)}
                  className="cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
          }
};

export default Favourite;
