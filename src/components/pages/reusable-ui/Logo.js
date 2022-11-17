import styled from 'styled-components';
import { theme } from '../../../theme';


export default function Logo({picsBurgerSize, textSize}) {

    // affichage
    return (
        <>
            <LogoStyled textSize={textSize}>
                crazee 
                <img src={"images/logo-orange.png"} alt="logo-crazy-burger" height={picsBurgerSize}/> 
                burger
            </LogoStyled>
        </>
    )
}

const LogoStyled = styled.h1`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    font-size: ${props => props.textSize};
    color: ${theme.colors.primary_burger};
    font-family: 'Amatic SC', cursive;
    margin-bottom: 0px;
    img {
        padding: 0 ${theme.spacing.xs} 0 ${theme.spacing.xs};
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
   
`