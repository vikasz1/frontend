import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://vikasz1.onrender.com/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data.map((item) => {
        console.log(item);
        return (
          <>
            <h1 key={item._id}>{item.name}</h1>
            <h1 key={item._id}>{item.author}</h1>
          </>
        );
      })}
    </div>
  );
}

export default App;
