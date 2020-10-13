import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../store/Product/Product.selector";
import { Product } from "../store/Product/Product.types";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../store/Product/Product.actions";

const ProductListing: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(productSelector);

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      {products.map(
        (product: Product): React.ReactElement => (
          <ProductCard key={product.id} product={product} />
        )
      )}
    </>
  );
};

export default ProductListing;
