import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const discountedPrice = (
    product.price * (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image-placeholder">
          {product.title.substring(0, 2).toUpperCase()}
        </div>
        {product.stock > 0 && (
          <span className="stock-badge">In Stock</span>
        )}
        {product.discountPercentage > 0 && (
          <span className="discount-badge">-{product.discountPercentage.toFixed(1)}%</span>
        )}
      </div>

      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        
        <p className="product-category">{product.category}</p>

        <div className="product-rating">
          <span className="stars">⭐ {product.rating.toFixed(2)}</span>
        </div>

        <p className="product-description">{product.description.substring(0, 80)}...</p>

        <div className="product-price-section">
          <span className="current-price">${discountedPrice}</span>
          {product.discountPercentage > 0 && (
            <span className="original-price">${product.price.toFixed(2)}</span>
          )}
        </div>

        <div className="product-info">
          <span className="brand">Brand: {product.brand}</span>
          <span className="stock-info">Stock: {product.stock}</span>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
