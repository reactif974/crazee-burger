import { useParams } from 'react-router-dom'
import NavBar from '../reusable-ui/NavBar'
import styled from 'styled-components'
import { theme } from '../../../theme'
import logoOrange from '../../../assets/logo-orange.png'

export default function OrderPage() {

    const {name} = useParams();

    return (
        <OrderPageStyled>
            <div className="section-container">
                <NavBar userName={name}/>
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    position:absolute;
    width:100%;
    height:100vh;
    background-color: #FF9E1C;
    &::before {
        position:absolute;
        content: "";
        top:0;
        left:0;
        right:0;
        bottom:0;
        width:100%;
        height:100vh;
        background: url(${logoOrange});
        background-size: 110px;
        background-repeat: repeat;
        background-position:cover;
    }
    top:0;
    left:0;
    right:0;
    bottom:0;
    .section-container {
        position:fixed;
        top:0;
        left:0;
        right:0;
        margin:110px auto 0 auto;
        display:flex;
        flex-direction:row;
        width:95%;
        height:85%;
        background-color:${theme.colors.white};
        border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
        @media ${theme.devices.laptopM} {
            width:75%;
            margin:110px auto 0 auto;
        }
        @media ${theme.devices.mobileL} {
            width:90%;
            margin:110px auto 0 auto;
        }
    }
    
`