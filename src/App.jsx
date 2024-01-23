import { useEffect, useState } from "react";

import "./style.scss";

function App() {
  const [catMassage, setCatMassage] = useState("");
  const [dogMassage, setDogMassage] = useState("");

  useEffect(() => {
    fetch("https://dog-api.kinduff.com/api/facts")
      .then((res) => res.json())
      .then((data) => setDogMassage(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setCatMassage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="special">VS</h1>
      <div className="cat-wrapper">
        <div className="textContainer">
          <h2>What you should know about cat.</h2>
          <p>{catMassage.data}</p>
        </div>
      </div>
      <div className="dog-wrapper">
        <div className="textContainer">
          <h2>What you should know about dog.</h2>
          <p>{dogMassage.facts}</p>
        </div>
      </div>
    </>
  );
}

export default App;
