import React, { useState, useEffect } from "react";

const CountRender = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect!!");
  }, [count]); // 第二引数の配列に任意の変数を指定（ここではcountが変化した時のみ実行されるようにしている）

  return (
    <div>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        ADD 1
      </button>
    </div>
  );
};

export default CountRender;
