import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import PanelAdminTabs from "../adminPanel/PanelAdminTabs";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu-container">
      <div className="card-container">
        {menu.map((menu) => (
          <div key={menu.id} className="grille-item">
            <Card {...menu} />
          </div>
        ))}
      </div>
      <PanelAdminTabs />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: relative;
  overflow: hidden;
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    row-gap: 1em;
    column-gap: 1em;
    justify-content: center;
    height: 80vh;
    padding-top: 45px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 270px;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background-color: ${theme.colors.background_white};
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    box-shadow: inset 0px 0px 12px 0px ${theme.colors.greySemiDark};
    overflow-y: scroll;
    .grille-item {
      display: flex;
      justify-content: center;
    }
  }
`;
