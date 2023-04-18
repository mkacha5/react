import React from "react";
import "./card.css"

function ProductCard({el,handleDiscount}) {
  return (
    <div>
      <section className="card card-blue">
        <div className="product-image">
          <img
            src={el.thumbnail}
            alt="OFF-white Blue Edition"
            draggable="false"
          />
        </div>
        <div className="product-info">
          <h2>{el.title}</h2>
          <p>{el.description}</p>
          <div className="price">{el.price}</div>
        </div>
        <div className="btn">
          <button className="buy-btn" onClick={()=>handleDiscount(el.discountPercentage)} >show discount</button>
          <button className="fav">
            <svg
              className="svg"
              id="i-star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
