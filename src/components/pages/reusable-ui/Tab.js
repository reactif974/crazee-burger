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
  border-style: solid;
  border-width: 1px 1px 2px 1px;
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  background-color: ${theme.colors.background_white};
  border-color: ${theme.colors.greyLight};
  color: ${theme.colors.greyDark};
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: ${theme.weights.regular};
  box-shadow: ${theme.shadows.subtle};
  &.tabs-one {
    width: 60px;
    svg {
      font-size: ${theme.fonts.P0};
    }
  }
  &.tabs-two {
    justify-content: space-evenly;
    width: 212px;
  }
  &.tabs-three {
    width: 220px;
    justify-content: space-evenly;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    border-bottom: 2px solid transparent;
  }
  &.is-active-tab {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.background_white};
    border: 1px solid ${theme.colors.background_dark};
    svg {
      color: ${theme.colors.background_white};
      font-size: ${theme.fonts.P0};
    }
  }
`;
