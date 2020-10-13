import * as React from "react";
import { BadgeWrapper } from "./Badge.styled";

export enum BadgeTypes {
  HOT = "HOT",
  NEW = "NEW",
  SPICY = "SPICY",
  CLONE = "CLONE",
  WEIRD = "WEIRD",
}

export interface BadgeProps {
  className?: string;
  text: string;
  type: BadgeTypes;
}

const Badge: React.SFC<BadgeProps> = (
  props: BadgeProps
): React.ReactElement => {
  const getColor = (type: BadgeTypes): string => {
    switch (type) {
      case BadgeTypes.HOT:
      case BadgeTypes.SPICY: {
        return "#fe4a49";
      }
      case BadgeTypes.NEW: {
        return "#fed766";
      }
      case BadgeTypes.CLONE: {
        return "#2ab7ca";
      }
      case BadgeTypes.WEIRD: {
        return "#e6e6ea";
      }
    }
  };

  return (
    <BadgeWrapper className={props.className} color={getColor(props.type)}>
      {props.text}
    </BadgeWrapper>
  );
};

export default Badge;
