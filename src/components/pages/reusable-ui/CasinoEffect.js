import styled from "styled-components";
import { theme } from "../../../theme";

export default function CasinoEffect({ className, count }) {
  return <CasinoEffectStyled className={className}>{count}</CasinoEffectStyled>;
}

const CasinoEffectStyled = styled.div`
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: ${theme.weights.bold};
  font-size: ${theme.fonts.P4};
  line-height: 45px;
  color: ${theme.colors.primary};
`;
