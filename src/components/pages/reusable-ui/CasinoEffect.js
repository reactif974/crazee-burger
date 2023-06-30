import styled from "styled-components";
import { theme } from "../../../theme";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }

  .count-animated-exit {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(0%);
  }
  .count-animated-exit-active {
    transition: 300ms;
    transform: translateY(-100%);
  }
`;
