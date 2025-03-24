import React, {useState} from "react";
import "./Card.css";
import { Heart } from "lucide-react";

const Card = ({
  type,
  image,
  title,
  description,
  price,
  isNew,
}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card-container"
      style={{
        height: type === "category" ? "300px" : "375px",
        transform: isHovered ? type === "sale" ? "translateY(-8px)" :"none":"translateY(0)",
        transition: "transform 0.3s",
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img src={image} alt={title} />
        <div className="overlay"></div> 
        {
            type === "sale" && (
                <div className="add-to-cart">
                    <button>Add to Cart</button>
                </div>
            )
        }
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
          <p>${price}</p>
        </div>
      )}

      {
        type === "sale" && (
          <div className="flags">
            {isNew && <span className="new-flag">New</span>}
            <Heart className="favorite-flag" size={30} />
          </div>
        )
      }
    </div>
  );
};

export default Card;
