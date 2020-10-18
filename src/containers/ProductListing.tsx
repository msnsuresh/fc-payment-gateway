import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../store/Product/Product.selector";
import { Product } from "../store/Product/Product.types";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../store/Product/Product.actions";
import { firestore } from "../utils/Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const ProductListing: React.FC = () => {
  // const dispatch = useDispatch();
  // const { products, loading, error } = useSelector(productSelector);

  // React.useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  const productsRef = firestore.collection("recipes");
  const query = productsRef.orderBy("id").limit(5);
  const [products] = useCollectionData<Product>(query, { idField: "id" });
  console.log(productsRef, query, products);

  return (
    <>
      {products &&
        products.map(
          (product: Product): React.ReactElement => (
            <ProductCard key={product.id} product={product} />
          )
        )}
    </>
  );
};

export default ProductListing;
