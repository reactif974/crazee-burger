import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function UserProfil({ userName }) {
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(userName);
  };

  return (
    <UserProfilStyled>
      <div className="user-infos">
        <h3>
          Hey,
          <span>{userName}</span>
        </h3>
        <Link to="/" onClick={handleSignOut}>
          <span className="title-deconnect">Se déconnecter</span>
        </Link>
      </div>
      <span className="profil-icon">
        <BsPersonCircle />
      </span>
    </UserProfilStyled>
  );
}

const UserProfilStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 9px;
  @media ${theme.devices.mobileM} {
    width: 100px;
  }
  .profil-icon {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyDark};
    @media ${theme.devices.mobileL} {
      font-size: ${theme.fonts.P3};
    }
    @media ${theme.devices.mobileM} {
      font-size: ${theme.fonts.P3};
    }
  }
  .user-infos {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: right;
    padding-right: ${theme.spacing.md};
    @media ${theme.devices.tablet} {
      padding-right: ${theme.spacing.xs};
    }
    @media ${theme.devices.mobileM} {
      padding-right: ${theme.spacing.xs};
    }
    @media all and (min-width: 425px) and (max-width: 768px) {
      padding-right: ${theme.spacing.xs};
    }
    a {
      text-decoration: none;
      font-family: "Open Sans", sans-serif;
      font-size: ${theme.fonts.XS};
      color: ${theme.colors.greyDark};
      @media ${theme.devices.mobileM} {
        font-size: ${theme.fonts.XXXS};
      }
      .title-deconnect {
        border-bottom: 2px solid transparent;
        &:hover {
          border-color: ${theme.colors.greyDark};
        }
      }
    }
    h3 {
      font-family: "Open Sans", sans-serif;
      font-weight: ${theme.weights.light};
      color: ${theme.colors.greyDark};
      margin-top: -9px;
      margin-bottom: 1px;
      @media ${theme.devices.tablet} {
        font-size: ${theme.fonts.XS};
      }
      @media ${theme.devices.mobileM} {
        font-size: ${theme.fonts.XXS};
        margin-top: -2px;
      }
      span {
        color: ${theme.colors.background_button_submit};
        padding-left: ${theme.spacing.xs};
      }
    }
  }
`;
