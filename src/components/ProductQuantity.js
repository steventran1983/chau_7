import React, { useState } from "react";

import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

function ProductQuantity() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="product-quantity">
      <FaMinusSquare
        className="order-button"
        onClick={() => setAmount(amount === 0 ? 0 : amount - 1)}
        />
        <span> {amount}</span>
      <FaPlusSquare
        className="order-button"
        onClick={() => setAmount(amount === 10 ? amount : amount + 1)}
      />
    </div>
  );
}

export default ProductQuantity;
