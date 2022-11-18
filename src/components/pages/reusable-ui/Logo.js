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
    @media ${theme.devices.mobileM} {
        width:30vw;
    }
    @media ${theme.devices.mobileL} {
        width:30vw;
    }
    @media all and (min-width: 425px) and (max-width: 632px) {
        width:30vw;
    }
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
            transform: scale(.6);
        }
        @media ${theme.devices.mobileM} {
            transform: scale(.5);
        }
        @media all and (min-width: 425px) and (max-width: 632px) {
            transform: scale(.7);
        }
    }
`