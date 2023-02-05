import { useState, useEffect } from "react";
import axios from "axios";
const API =
  "https://vikasz1.onrender.com/api/data" || "http://localhost:5000/api/data";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(API, { email, password })
      .then((response) => {
        if (response.status === 200) {
          console.log("User saved successfully.");
          alert("Success");
        } else {
          console.error("Error saving user.");
          alert("Failure");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      {/* {console.log(data)} */}
      {/* {data.map((item) => {
        return (
          <div key={item.date}>
            <h1>{item.name}</h1>
            <h1>{item.author}</h1>
          </div>
        );
      })} */}

      {/* // taking input from the user and submitting to the database */}
      <div className="container m-5">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
