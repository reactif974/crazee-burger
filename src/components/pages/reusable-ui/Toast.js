import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Toast() {
  return (
    <StyledToastContainer>
      <ToastContainer />
    </StyledToastContainer>
  );
}

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast is passed to toastClassName */
  .toast {
    color: ${theme.colors.background_white};
    font-family: "Open Sans", sans-serif;
  }
  button[aria-label="close"] {
    color: ${theme.colors.background_white};
    font-weight: ${theme.weights.bold};
  }
  /* .body is passed to bodyClassName */
  .body > div:last-child {
    padding-left: 20px;
  }
`;
