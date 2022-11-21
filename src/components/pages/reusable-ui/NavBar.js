import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import Logo from "./Logo"
import Icon from "./Icon"

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
                    <Link to="/">Se déconnecter</Link>
                </div>
                <Icon iconName="BsPersonCircle" iconClassName="userPanel-icon"/>
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
    .user-panel {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        @media ${theme.devices.mobileM} {
            width: 100px;
        }
        .user-infos {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align:right;
            padding-right: ${theme.spacing.md};
            @media ${theme.devices.mobileM} {
                padding-right: ${theme.spacing.xs};
            }
            a {
                text-decoration: none;
                font-family: 'Open Sans', sans-serif;
                font-size: ${theme.fonts.XS};
                color:${theme.colors.greyDark};
                border-bottom: 2px solid transparent;
                @media ${theme.devices.mobileM} {
                    font-size: ${theme.fonts.XXXS};
                }
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
                @media ${theme.devices.tablet} {
                    font-size: ${theme.fonts.XS};
                }
                @media ${theme.devices.mobileM} {
                    font-size: ${theme.fonts.XXS};
                    margin-top:-2px;
                }

                > span {
                    color: ${theme.colors.background_button_submit};
                    padding-left: ${theme.spacing.xs};
                }
            }
        }
    }
`
