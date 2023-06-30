import styled from "styled-components";
import { theme } from "../../../theme";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { totalPriceAnimation } from "../../../theme/animations";

export default function CasinoEffect({ className, count }) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames={"count-animated"} timeout={5000} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: ${theme.weights.bold};
  font-size: ${theme.fonts.P4};
  line-height: 45px;
  color: ${theme.colors.primary};
  overflow-y: hidden;

  span {
    display: inline-block;
  }

  ${totalPriceAnimation}
`;
