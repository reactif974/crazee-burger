import styled from "styled-components";
import { theme } from "../../../theme";
import Button from "../reusable-ui/Button";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";

export default function PanelTabs() {
  return (
    <PanelTabsStyled>
      <div className="bloc-tabs">
        <Button
          text={""}
          className={"tabs tabs-one"}
          Icon={<BsChevronDown />}
        />
        <Button
          text={"Ajouter un produit"}
          className={"tabs tabs-two"}
          Icon={<AiOutlinePlus />}
        />
        <Button
          text={"Modifier un produit"}
          className={"tabs tabs-three"}
          Icon={<RiPencilFill />}
        />
      </div>
      <div className="onglets-content">
        <div className="contenu">
          <h2>contenu 1</h2>
        </div>
        <div className="contenu">
          <h2>contenu 2</h2>
        </div>
        <div className="contenu">
          <h2>contenu 3</h2>
        </div>
      </div>
    </PanelTabsStyled>
  );
}

const PanelTabsStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;
  background-color: red;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  .bloc-tabs {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    background-color: transparent;
    width: 100%;
    margin-top: -35px;
    width: 100%;
    .tabs {
      cursor: pointer;
      svg {
        padding-right: 5px;
        font-size: ${theme.fonts.P1};
      }
    }
    .tabs-one {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .tabs-two {
      grid-column-start: 3;
      grid-column-end: 5;
    }
    .tabs-three {
      grid-column-start: 5;
      grid-column-end: 7;
    }
    .active-tabs {
      background: white;
      border-bottom: 1px solid transparent;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 2px);
        height: 5px;
        background: rgb(88, 147, 241);
      }
    }

    .content-tabs {
      flex-grow: 1;
    }
    .content {
      background: white;
      padding: 20px;
      width: 100%;
      height: 100%;
      display: none;
    }
    .content h2 {
      padding: 0px 0 5px 0px;
    }
    .content hr {
      width: 100px;
      height: 2px;
      background: #222;
      margin-bottom: 5px;
    }
    .content p {
      width: 100%;
      height: 100%;
    }
    .active-content {
      display: block;
    }
  }
`;
