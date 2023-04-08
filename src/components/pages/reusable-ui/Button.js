import styled, { css } from "styled-components";
import { theme } from "../../../theme";

export default function Button({
  text,
  type,
  Icon,
  className,
  variant = "normal",
}) {
  return (
    <ButtonStyled type={type} className={className} variant={variant}>
      {text}
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${(props) => props.variant === "normal" && getNormalStyle()}
  ${(props) => props.variant === "sucess" && getSucessStyle()}
  ${(props) => props.variant === "refresh" && getRefreshStyle()}
  ${(props) => props.variant === "add" && getAddStyle()}
`;

const getSucessStyle = () => {
  return css`
    width: auto;
    height: 34.05px;
    font-size: 12px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.success};
    padding: 10.5156px 29.25px 9.53125px 29px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
    cursor: pointer;
  `;
};

const getNormalStyle = () => {
  return css`
    width: 100%;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.background_button_submit};
    color: ${theme.colors.white};
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.bold};
    &:hover {
      cursor: pointer;
    }
  `;
};

const getRefreshStyle = () => {
  return css`
    width: auto;
    height: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${theme.fonts.XS};
    font-weight: ${theme.weights.regular};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.background_button_submit};
    color: ${theme.colors.white};
    padding: 19px 24px 19px 25px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  `;
};

const getAddStyle = () => {
  return css`
    width: 95px;
    height: 38px;
    font-size: ${theme.fonts.XS};
    font-family: "Open Sans", sans-serif;
    border: 1px solid ${theme.colors.primary_burger};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    transition: background-color 0.4s ease, color 0.4s ease;
    padding: 13px, 28px, 13px, 28px;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
    }
    &:active {
      background-color: ${theme.colors.primary_burger};
      color: ${theme.colors.white};
    }
  `;
};
