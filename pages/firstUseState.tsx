import React, { useState } from "react";

const CountUp = () => {
  const [isRed, setIsRed] = useState(false);
  const [val, setVal] = useState("");

  const handleChange = (e: any) => {
    setVal(e.target.value);
  };

  return (
    <>
      <button
        className={isRed ? "bg-red-500" : "bg-blue-500"}
        onClick={() => setIsRed(!isRed)}
      >
        Click me
      </button>
      <div>
        <input type="text" value={val} onChange={handleChange} />
        <p>{val}</p>
      </div>
    </>
  );
};

export default CountUp;
