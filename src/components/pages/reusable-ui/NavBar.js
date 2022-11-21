import styled from "styled-components"
import { theme } from "../../../theme"
import UserProfil from "../order/UserProfil"
import Logo from "./Logo"

export default function NavBar({userName}) {
    return (
        <NavBarStyled>
            <Logo />
            <UserProfil userName={userName}/>
        </NavBarStyled>
    )
}


const NavBarStyled = styled.div`
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    width:95%;
    height:93px;
    margin:0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 0 ${theme.spacing.xxl} 0 ${theme.spacing.md};
    box-sizing: border-box;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    @media ${theme.devices.laptopM} {
        width:75%;
        padding: 0 ${theme.spacing.md} 0 ${theme.spacing.md};
    }
    @media ${theme.devices.mobileL} {
        width:90%;
        padding: 0 ${theme.spacing.xs} 0 ${theme.spacing.xs};
    }
    @media all and (min-width: 425px) and (max-width: 768px) {
        padding: 0 ${theme.spacing.md} 0 ${theme.spacing.xs};
    }
    @media ${theme.devices.mobileM} {
        padding: 0 ${theme.spacing.md} 0 ${theme.spacing.xxs};
    }
    h1 {
        margin-top: 0;
    }
`
