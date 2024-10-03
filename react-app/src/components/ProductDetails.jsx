import PropTypes from "prop-types";
import React from "react";
function ProductDetails({
  handlerProductSelected,
  handlerRemove,
  product = {},
}) {
  return (
    <>
      <tr>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>${product.price}</td>
        <td>
          <button className="btn btn-secondary btn-sm" onClick={() => handlerProductSelected(product)}>
            Update
          </button>
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={() => handlerRemove(product.id)}>Remove</button>
        </td>
      </tr>
    </>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  handlerRemove: PropTypes.func.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
};

export default ProductDetails;
