import { useParams } from 'react-router-dom'
import NavBar from '../reusable-ui/NavBar'
import styled from 'styled-components'
import { theme } from '../../../theme'
import logoOrange from '../../../assets/logo-orange.png'

export default function OrderPage() {

    const {name} = useParams();

    return (
        <OrderPageStyled>
            <NavBar userName={name}/>
            <main className="main-container"></main>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    display: flex;
    width:100%;
    height:100vh;
    flex-direction: column;
    justify-content: center;
    // background: url(${logoOrange}), #FF9E1C;
    background: #FF9E1C;
    background-size: 110px;
    background-repeat: repeat;
    background-position:cover;
    .main-container {
        display:flex;
        width:1400px;
        max-width:1400px;
        height:80vh;
        margin:0 auto;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
        background-color: ${theme.colors.background_white};
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        box-shadow: inset 0px 0px 12px 0px ${theme.colors.greySemiDark};
    }
`