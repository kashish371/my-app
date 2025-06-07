import { useEffect, useState } from "react";

function Events() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hi");
  });
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>change value</button>
    </>
  );
}
export default Events;
