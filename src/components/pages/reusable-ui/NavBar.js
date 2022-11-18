import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "./Logo"
import { BsPersonCircle } from 'react-icons/bs'

export default function NavBar({userName}) {
    return (
        <NavBarStyled>
            <Logo />
            <div className="user-panel">
                <div className="user-infos">
                    <h3>
                        Hey,
                        <span>{userName}</span>
                    </h3>
                    <Link to="/">Se Déconnecter</Link>
                </div>
                <span className="userPanel-icon"><BsPersonCircle /></span>
            </div>
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
    h1 {
        margin-top: 0;
    }
    .user-panel {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        .userPanel-icon {
            font-size: 43px;
            color:${theme.colors.greyDark};
        }
        .user-infos {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align:right;
            padding-right: ${theme.spacing.md};
            a {
                text-decoration: none;
                font-family: 'Open Sans', sans-serif;
                font-size: ${theme.fonts.XS};
                color:${theme.colors.greyDark};
                border-bottom: 2px solid transparent;
                &:hover {
                    border-color: ${theme.colors.greyDark};
                }
            }
            h3 {
                font-family: 'Open Sans', sans-serif;
                font-weight: ${theme.weights.light};
                color:${theme.colors.greyDark};
                margin-top:-10px;
                margin-bottom: 5px;
                > span {
                    color: ${theme.colors.background_button_submit};
                    padding-left: ${theme.spacing.xs};
                }
            }
        }
    }
`
