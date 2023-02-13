import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  OutlineGray5006c: "border border-gray_500_6c border-solid",
  FillGray900: "bg-gray_900",
  FillGray100: "bg-gray_100",
  srcFillWhiteA700: "bg-white_A700",
  srcFillGray800: "bg-gray_800",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder19: "rounded-radius19",
  RoundedBorder12: "rounded-radius12",
  srcRoundedBorder12: "rounded-radius12",
};
const sizes = {
  sm: "py-[5px]",
  md: "px-[6px] py-[7px]",
  lg: "pl-[10px] py-[11px]",
  xl: "pb-[35px] pl-[10px] pr-[13px] pt-[13px]",
  "2xl": "pl-[15px] py-[16px]",
  "3xl": "pb-[14px] pt-[18px] px-[14px]",
  "4xl": "pb-[35px] pl-[10px] pr-[18px] pt-[18px]",
  "5xl": "pb-[13px] pl-[13px] pt-[20px]",
  "6xl": "pb-[19px] pl-[19px] pt-[23px]",
  "7xl": "pb-[19px] pt-[23px]",
  smSrc: "pr-[8px] py-[8px]",
  mdSrc: "pb-[13px] pr-[8px] pt-[8px]",
  lgSrc: "sm:pr-[20px] pr-[21px] py-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder19",
    "RoundedBorder12",
    "srcRoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "OutlineGray5006c",
    "FillGray900",
    "FillGray100",
    "srcFillWhiteA700",
    "srcFillGray800",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "smSrc",
    "mdSrc",
    "lgSrc",
  ]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "FillWhiteA700",
  size: "5xl",
};

export { Input };
