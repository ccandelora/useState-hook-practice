import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [timeOfDay, setTimeOfDay] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTimeOfDay(newTime);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{timeOfDay}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
