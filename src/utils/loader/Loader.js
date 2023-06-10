import styled from "styled-components";

export default function Loader() {
  return (
    <LoaderStyled>
      <div className="loader-container">
        <div className="dot d1"></div>
        <div className="dot d2"></div>
        <div className="dot d3"></div>
      </div>
    </LoaderStyled>
  );
}

const LoaderStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: white;
  opacity: 0.8;
  z-index: 56;
  transition: opacity 1s ease-in-out;
  .loader-container {
    display: flex;
    .dot {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: white;
      margin: 0 10px;
      animation: loader infinite 0.3s alternate;
    }
    .d2 {
      animation-delay: 0.05s;
    }
    .d3 {
      animation-delay: 0.1s;
    }
    @keyframes loader {
      100% {
        transform: translateY(-30px);
      }
    }
  }
`;
