import styled from "styled-components";
import { theme } from "../../../theme";

export default function Tab({ label, className, Icon, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {Icon && Icon}
      {label}
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
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.background_dark};
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: ${theme.weights.bold};
  &:hover {
    cursor: pointer;
  }
`;
