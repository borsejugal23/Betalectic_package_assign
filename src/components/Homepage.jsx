
import React, { useState } from "react";
import { Button, Label } from "./Reusable";
import { useThrottle } from "./throttle";

const Homepage = () => {
  const [query,setQuery]=useState("");
  const throttle = useThrottle(query);
  console.log(throttle)
  return (
    <div style={{width:"80%",margin:"auto"}}>
        <Label text={"Search For NPM Packages"}/>
      <input
        type="text"
        name=""
        className="mt-1 px-3 py-2 bg-white border border-black shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Search here"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
      <br />
      <Label text={"Results"}/>
      <div style={{height:"200px",overflowY: "auto"}}>
      {throttle?.map((pkg, i) => (
          <label key={i} style={{ display: "block", marginBottom: "10px" }}>
            <input type="radio" name="package" value={pkg.package.name} style={{ marginRight: "5px" }} />
            {pkg.package.name}
          </label>
        ))}
      </div>
      <br /><br />
      <Label text={"why is this your Fav?"}/>
      <textarea
        rows={4}
        cols={50}
        className="mt-1 px-3 py-2 bg-white border border-black shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Enter your text here..."
      />
      <Button
        classname={
          "w-1/7 bg-blue-600 hover:bg-blue-500 px-3 py-1 border-0 rounded text-white m-5"
        }
      />
    </div>
  );
};

export default Homepage;
