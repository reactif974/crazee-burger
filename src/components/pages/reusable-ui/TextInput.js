//import { useRef } from "react";
import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../theme";

const TextInput = React.forwardRef(
  (
    {
      value,
      onChange,
      Icon,
      placeholder,
      variant = "normal",
      className,
      ...extraProps
    },
    ref
  ) => {
    return (
      <InputStyled variant={variant} className={className}>
        {Icon && <span className="icon">{Icon}</span>}
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          {...extraProps}
        />
      </InputStyled>
    );
  }
);

export default TextInput;

const InputStyled = styled.div`
  ${(props) => props.variant === "normal" && getNormalStyle()}
  ${(props) => props.variant === "add" && getAddStyle()}
`;

const getAddStyle = () => {
  return css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    height: 35px;
    padding: 0 0 0 24px;
    text-align: left;
    box-sizing: border-box;
    .icon {
      width: 15px;
      height: 13px;
      z-index: 1;
      color: ${theme.colors.greyBlue};
    }
    input {
      position: absolute;
      width: auto;
      top: 0;
      left: 0;
      right: 0;
      height: 35px;
      border: none;
      background-color: ${theme.colors.greyLight};
      border-radius: 5px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      padding: 4px 0 0 ${theme.spacing.xl};
      font-weight: 400;
      font-size: 15px;
      line-height: 17px;
      &::placeholder {
        color: #a7a8ad;
      }
    }
  `;
};

const getNormalStyle = () => {
  return css`
    position: relative;
    width: 480px;
    height: 65px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 65px;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.greyDark};
    padding: 0 0 0 ${theme.spacing.xl};
    text-align: left;
    box-sizing: border-box;
    .icon {
      color: ${theme.colors.greyDark};
      font-size: ${theme.fonts.P2};
      z-index: 1;
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 63px;
      border: none;
      padding: 0 0 0 ${theme.spacing.xxl};
      text-align: left;
      background-color: ${theme.colors.greyLight};
      &::placeholder {
        font-family: "Open Sans", sans-serif;
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.light};
        color: #a7a8ad;
      }
    }
  `;
};
