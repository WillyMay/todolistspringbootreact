import React from "react";
import ProductDetails from "./ProductDetails";
import PropTypes from "prop-types";

function ProductGrid({ handlerProductSelected, handlerRemove, products = {} }) {
  return (
    <>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>remove</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <ProductDetails
                handlerRemove={handlerRemove}
                product={product}
                key={product.name}
                handlerProductSelected={handlerProductSelected}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  handlerRemove: PropTypes.func.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,

};
export default ProductGrid;
