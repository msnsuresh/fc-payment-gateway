import styled from "styled-components";
import Badge from "../Badge/Badge";

export const ProductCardWrapper = styled.div`
  align-items: flex-start;
  width: 16rem;
  height: 25rem;
  margin: 0.5rem;
  background: #fff;

  :hover {
    /* border: 1px solid #dde3e7; */
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease-in-out 0s box-shadow;
  }
`;

export const ProductImage = styled.div<{ imageUrl: string }>`
  width: 16rem;
  height: 10rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
`;

export const ProductTitle = styled.div`
  font-weight: 600;
`;
export const ProductDescription = styled.div`
  color: #455057;
  min-height: 8rem;
`;
export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
export const HeartButton = styled.div`
  position: absolute;
  top: 8rem;
  right: 0.25rem;
  width: 4rem;
`;

export const ProductBadge = styled(Badge)`
  position: absolute;
  top: 1.5rem;
  left: 0.25rem;
`;
