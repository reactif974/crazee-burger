import styled from 'styled-components'
import { theme } from '../../../theme'
import logo from '../../../assets/logo-orange.png'
import refreshPage from '../../../utils/window/refresh'



export default function Logo() {

    return (
        <LogoStyled onClick={() => refreshPage() }>
            <h1>
                crazee 
                <img src={logo} alt="logo-crazy-burger"/> 
                burger
            </h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    cursor:pointer;
    h1 {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        font-size: 34px;
        color: ${theme.colors.primary_burger};
        font-family: 'Amatic SC', cursive;
        margin-bottom: 0px;
        transform: scale(1);
        img {
            padding: 0 ${theme.spacing.xs} 0 ${theme.spacing.xs};
            height: 50px;
        }
        @media ${theme.devices.tablet} {
            transform: scale(0.8);
        }
        @media ${theme.devices.mobileL} {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top:-40px;
        }
        @media ${theme.devices.mobileM} {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top:-40px;
        }
        @media all and (min-width: 425px) and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top:-40px;
        }
    }
`