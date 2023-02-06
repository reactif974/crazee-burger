import styled from "styled-components";
import { theme } from "../../../theme";

export default function Tab({ text, className, Icon, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {Icon && Icon}
      {text}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  width: 100%;
  height: 43px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: 0.6px solid ${theme.colors.greyDark};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.background_dark};
  font-family: "Open Sans", sans-serif;
  font-size: ${theme.fonts.XS};
  font-weight: ${theme.weights.bold};
  &:hover {
    cursor: pointer;
  }
`;
