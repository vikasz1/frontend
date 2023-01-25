import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
}

export default App;
