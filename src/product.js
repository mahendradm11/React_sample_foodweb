import React from 'react';
import './Product.css'; 
const Product = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map(data => (
          <div className="col-md-4" key={data.recipe.label}>
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={data.recipe.image} alt={data.recipe.label} />
              <div className="card-body">
                <center>
                  <h5 className="card-title">{data.recipe.label}</h5>
                  <p className="card-text">Total amount of calories: {Math.round(data.recipe.calories)}</p>
                  <button className="btn btn-primary">Buy</button>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
