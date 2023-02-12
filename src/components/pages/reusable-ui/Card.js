import styled from "styled-components";
import { theme } from "../../../theme";
import PriceContainer from "../order/main/PriceContainer";

export default function Card({ title, imageSource, price }) {
  return (
    <CardStyled image={imageSource} title={title}>
      <div className="pics-container"></div>
      <h2>{title}</h2>
      <PriceContainer price={price} />
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${theme.shadows.medium};
  box-shadow: ${theme.shadows.subtle};
  border-radius: ${theme.borderRadius.extraRound};
  .pics-container {
    height: 145px;
    margin: 29px 30px 20px 27px;
    background: url(${(props) => props.image}) no-repeat;
    background-size: contain;
    background-position: center;
  }
  h2 {
    width: 100%;
    text-align: left;
    font-family: "Amatic SC", cursive;
    padding-left: 27px;
    font-size: ${theme.fonts["P3.1"]};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
