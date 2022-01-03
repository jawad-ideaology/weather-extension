import React from "react";

export const Testing = () => {
  const [count, setCount] = React.useState(1);
  return (
    <div>
      Testing File: {count}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
