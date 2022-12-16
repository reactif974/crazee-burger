import { useParams } from "react-router-dom";
import NavBar from "../reusable-ui/NavBar";
import styled from "styled-components";
import { theme } from "../../../theme";
import logoOrange from "../../../assets/logo-orange.png";
import Menu from "./main/Menu";
import { useState } from "react";
import GlobalContext from "../../../context/GlobalContext";

export default function OrderPage() {
  const { name } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const contextValue = {
    isModeAdmin,
    updateIsModeAdmin: setIsModeAdmin,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      <OrderPageStyled>
        <NavBar userName={name} />
        <main className="main-container">
          <div className="sideBar-left"></div>
          <Menu />
        </main>
      </OrderPageStyled>
    </GlobalContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  // background: url(${logoOrange}), #FF9E1C;
  background: #ff9e1c;
  background-size: 110px;
  background-repeat: repeat;
  background-position: cover;
  .main-container {
    width: 1400px;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 20% 1fr;
    align-self: center;
    .sideBar-left {
      background-color: ${theme.colors.background_dark};
      height: 80vh;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
    }
  }
`;
