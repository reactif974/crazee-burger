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
    @media ${theme.devices.tablet} {
        transform: scale(0.8);
    }
    > span {
        color: ${theme.colors.primary_burger};
        font-size: ${parseInt(theme.fonts.P6, 10)*2}px;
        font-family: 'Amatic SC', cursive;
        font-weight: ${theme.weights.bold};
    }
    .crazee-span {
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
        }
    }
`