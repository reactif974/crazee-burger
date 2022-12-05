import { useParams } from 'react-router-dom'
import NavBar from '../reusable-ui/NavBar'
import styled from 'styled-components'
import { theme } from '../../../theme'
import logoOrange from '../../../assets/logo-orange.png'
import MenuCard from './main/MenuCard'

export default function OrderPage() {

    const {name} = useParams();

    return (
        <OrderPageStyled>
            <NavBar userName={name}/>
            <main className="main-container">
                {/* <div className="sideBar-left"></div> */}
                <MenuCard />
            </main>
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
        display:grid;
        /* grid-template-columns: 17% 1fr; */
        grid-template-columns: 1fr auto;
        width:1400px;
        max-width: 1400px;
        align-self: center;
        .sideBar-left {
            background-color: ${theme.colors.background_dark};
            height:80vh;
            width:100%;
            border-bottom-left-radius: ${theme.borderRadius.extraRound};
        }
    }
`