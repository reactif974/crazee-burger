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
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: ${theme.weights.bold};
  font-size: ${theme.fonts.P4};
  line-height: 45px;
  color: ${theme.colors.primary};

  .count-animated {
    background-color: red;
  }
  .count-animated-active {
    background-color: blue;
    transition: 2s;
  }
  .count-animated-done {
    background-color: green;
  }

  .count-animated-exit {
    background-color: yellow;
  }
  .count-animated-exit-active {
    background-color: black;
    transition: 2s;
  }
`;
