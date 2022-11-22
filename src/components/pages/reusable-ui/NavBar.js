import styled from 'styled-components'
import { theme } from '../../../theme'
import UserProfil from '../order/UserProfil'
import Logo from './Logo'

export default function NavBar({userName}) {

    return (
        <NavBarStyled>
            <Logo />
            <UserProfil userName={userName}/>
        </NavBarStyled>
    )
}


const NavBarStyled = styled.nav`
    display: flex;
    justify-content:center;
    margin: 0 auto;
    width:1400px;
    max-width:1400px;
    height:93px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 0 ${theme.spacing.xxl} 0 ${theme.spacing.md};
    box-sizing: border-box;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    //box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    h1 {
        margin-top: 0;
    }
`
