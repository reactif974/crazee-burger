import styled, { css } from "styled-components";
import { theme } from "../../../theme";

export default function Button({ text, type, Icon, className, variant }) {
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
