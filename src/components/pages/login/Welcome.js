import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h2>Bienvenue chez nous !</h2>
      <br />
      <hr />
      <h3>Connectez-vous</h3>
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  h2,
  h3 {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.regular};
    color: ${theme.colors.white};
    text-align: center;
  }
  h2 {
    font-size: ${theme.fonts.P6};
    margin: 100px 0 20px 0;
    font-weight: ${theme.weights.heavy};

    @media ${theme.devices.mobileL} {
      font-size: ${theme.fonts.P5};
      margin-top: 100px;
    }
    @media ${theme.devices.mobileM} {
      font-size: ${theme.fonts.P4};
      margin-top: 80px;
    }
    @media all and (min-width: 425px) and (max-width: 768px) {
      font-size: ${theme.fonts.P5};
      margin-top: 100px;
    }
  }
  h3 {
    font-size: ${theme.fonts.P5};
    margin-bottom: 20px;
    font-weight: ${theme.weights.light};
    @media ${theme.devices.mobileL} {
      font-size: ${theme.fonts.P3};
    }
    @media ${theme.devices.mobileM} {
      font-size: ${theme.fonts.P3};
    }
    @media all and (min-width: 425px) and (max-width: 768px) {
      font-size: ${theme.fonts.P3};
    }
  }
  hr {
    height: 3px;
    background-color: ${theme.colors.background_orange};
    border: none;
  }
`;
