import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Logo() {
    // affichage
    return (
        <>
            <LogoStyled>
                <span className='crazee-span'>crazee</span>
                <span>burger</span>
            </LogoStyled>
        </>
    )
}

const LogoStyled = styled.h1`
    margin-top:35px;
    transform: scale(1.05);
    // device tablet
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
    > span {
        color: ${theme.colors.primary_burger};
        font-size: ${parseInt(theme.fonts.P6, 10)*2}px;
        font-family: 'Amatic SC', cursive;
        font-weight: ${theme.weights.bold};
    }
    .crazee-span {
        @media ${theme.devices.mobileL} {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media ${theme.devices.mobileM} {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media all and (min-width: 425px) and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &::after {
          content: "";
          width: 280px;
          height: 188px;
          display: inline-block;
          position: relative;
          top: 60px;
          left:13px;
          background-image: url('images/logo-orange.png');
          background-size: 243px 160px;
          background-repeat: no-repeat;
            @media ${theme.devices.mobileL} {
                top: 30px;
            }
            @media ${theme.devices.mobileM} {
                top: 30px;
            }
            @media all and (min-width: 425px) and (max-width: 768px) {
                top: 30px;
            }
        }
    }
`