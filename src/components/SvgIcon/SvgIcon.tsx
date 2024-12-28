import "./SvgIcon.scss";
import { createElement, forwardRef, ForwardedRef } from "react";

type IconProps = {
  className?: string;
  name?: string;
  size?: number;
  [x: string]: any;
};

const SvgIcon = (
  { name, className, size = 16, ...rest }: IconProps,
  ref: ForwardedRef<HTMLSpanElement>
) => {
  const classnames = `icon ${className || ""}`.trim();

  try {
    const { default: SvgComponent } = require(`@/assets/icons/${name}.svg`);

    return createElement(
      "span",
      { ref, className: classnames, ...rest },
      SvgComponent({ width: size, height: size })
    );
  } catch (error) {
    console.error("Error loading SVG:", error);
    return null;
  }
};

export default forwardRef(SvgIcon);
