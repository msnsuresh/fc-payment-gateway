import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import { Product } from "../../store/Product/Product.types";
import {
  ProductBadge,
  HeartButton,
  ProductCardWrapper,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./ProductCard.styled";
import { BadgeTypesMapper } from "./ProductCard.utils";

export interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (
  props: ProductCardProps
): React.ReactElement => {
  const { product } = props;
  return (
    <ProductCardWrapper className="p-0">
      <div className="row pb-2">
        <div className="col">
          <ProductImage imageUrl={product.image} />
          <HeartButton className="col-3 btn btn-light btn-lg mx-3 align-self-center">
            <FontAwesomeIcon icon={faHeart} />
          </HeartButton>
          {product.label && (
            <ProductBadge
              text={product.label}
              type={BadgeTypesMapper[product.label.toLowerCase()]}
            />
          )}
        </div>
      </div>

      <div className="row px-3 pb-2">
        <ProductTitle className="col">{product.name}</ProductTitle>
      </div>
      <div className="row px-3 pb-2 flex-fill">
        <ProductDescription className="col">
          {product.description}
        </ProductDescription>
      </div>
      <div className="row px-3 pb-2">
        <ProductPrice className="col">
          &#x20B9;{`${product.price}`}
        </ProductPrice>

        <div className="col-3 btn btn-light btn-lg mx-3 align-self-center">
          <FontAwesomeIcon icon={faShoppingBasket} />
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
