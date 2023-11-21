import React from 'react';
import { ReuseButton } from "@locoworks/reusejs-react-button";
// import { ReuseInput } from "@locoworks/reusejs-react-input";
import "../styles/tailwind.css"

export function Button({classname}) {
  return <ReuseButton className={classname}
  onClick={() => {
    console.log("Hello");
  }}
>
  Submit
</ReuseButton>;
}

export function Label({classname,text}) {
  return   <label htmlFor="email" className="block mb-1">
  {text}
</label>
}
