import { useState } from "react";
import "./About.css";
export function About(props) {
  const [cities, setCities] = useState([
    { id: 1, myname: "indore" },
    { id: 2, myname: "delhi" },
  ]);
  return (
    <>
      {/* {
            props.isLoggedin==="true"? <h1 >Welcome to our website</h1> : <h2>Please login first</h2>
        } */}

      {cities.map((city) => {
        return(
            <div key={city.id}>
                <h1>city is {city.myname}</h1>
            </div>
        )
      })}
    </>
  );
}
