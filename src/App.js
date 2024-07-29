import React, { useState } from 'react';
import Product from './product';
import './App.css';

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "ae143e7c";
  const YOUR_APP_KEY = "51533d2c184bffb376d5114890c1fded";

  const submithandlers = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to check the structure
        setData(data.hits);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <center>
        <h4><strong> 🅱ALLS FOOD🍴 HUB🏀</strong></h4>
        <form onSubmit={submithandlers}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /><br />
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
        {data.length >= 1 ? <Product data={data} /> : null}
      </center>
    </div>
  );
};

export default App;
