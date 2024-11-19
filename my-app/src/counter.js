import { useState } from "react";

const couter = () => {
  const [counter, sercounter] = useState(0);
  return (
    <div>
      <h1>Counter{counter}</h1>
    </div>
  );
};
export default couter;
