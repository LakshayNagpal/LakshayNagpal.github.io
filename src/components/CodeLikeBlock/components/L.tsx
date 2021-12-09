import React, { HTMLAttributes } from "react";
import clsx from "clsx";

import { useStyles } from "../CodeLikeBlock.styles";

export interface LProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  hover?: boolean;
  git?: "green" | "blue";
}

export const L: React.FC<LProps> = ({
  active,
  hover,
  children,
  className,
  git,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        classes.L,
        active && classes.active,
        hover && classes.hover,
        git && classes.git,
        git && `${classes.git}-${git}`,
        className
      )}
      {...props}
    >
      <div className={classes.LChildren}>{children}</div>
    </div>
  );
};
