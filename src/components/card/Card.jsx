import React, { useState } from "react";
import "./Card.css";
import { Heart, ShoppingCartIcon } from "lucide-react";

const Card = ({
  type,
  image,
  title,
  description,
  price,
  isNew,
  isOnSale,
  discountPercentage,
  originalPrice,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLike, setIsLike] = useState(false);
  return (
    <div
      className="card-container"
      style={{
        height: type === "category" ? "300px" : "375px",
        transform: isHovered
          ? type === "sale"
            ? "translateY(-8px)"
            : "none"
          : "translateY(0)",
        transition: "transform 0.3s",
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img src={image} alt={title} />
        <div className="overlay"></div>
      </div>
      {type === "category" && (
        <div className="category-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )}

      {type === "sale" && (
        <div className="sale-content">
          <h3>{title}</h3>
          <div className="sale--price">
            <p>${price}</p>
            {isOnSale && <s className="original-price">${originalPrice}</s>}
          </div>
        </div>
      )}

      {type === "sale" && (
        <div className="flags">
          {isNew && <span className="new-flag">New</span>}
          {isOnSale && <span className="sale-flag">{discountPercentage}%</span>}
        </div>
      )}

      {type === "sale" && (
        <div className="card-icons">
          <Heart
            onClick={() => setIsLike((prev) => !prev)}
            size={40}
            fill={isLike ? "red" : "#00000000"}
            stroke={isLike ? "red" : "black"}
          />
          <ShoppingCartIcon size={40} />
        </div>
      )}
    </div>
  );
};

export default Card;
