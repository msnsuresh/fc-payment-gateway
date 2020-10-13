import styled from "styled-components";

export const BadgeWrapper = styled.span<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 0 5px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
`;
