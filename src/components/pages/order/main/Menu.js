import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu-container">
      {menu.map((menu) => {
        return (
          <div key={menu.id} className="grille-item">
            <Card {...menu} />
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  justify-content: center;
  height: 80vh;
  padding: 60px 54px 80px 60px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background-color: ${theme.colors.background_white};
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  box-shadow: inset 0px 0px 12px 0px ${theme.colors.greySemiDark};
  overflow-y: scroll;
  .grille-item {
    display: flex;
    justify-content: center;
  }
`;
