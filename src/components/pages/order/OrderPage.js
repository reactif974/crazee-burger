import { useParams } from 'react-router-dom'
import NavBar from '../reusable-ui/NavBar'
import styled from 'styled-components'
import { theme } from '../../../theme'
import logoOrange from '../../../assets/logo-orange.png'
import { fakeMenu2 } from '../../../fakeData/fakeMenu'
import MenuCard from '../reusable-ui/MenuCard'
import { useState } from 'react'

export default function OrderPage() {

    const [menuFake, setMenuFake] = useState(fakeMenu2)

    const {name} = useParams();

    return (
        <OrderPageStyled>
            <NavBar userName={name}/>
            <main className="main-container">
                {/* <div className="sideBar-left"></div> */}
                <div className="menu-container">
                    {menuFake.map((menu) => {
                        return <div key={menu.id} className="grille-item"><MenuCard {...menu} /></div>
                    })}
                </div>
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
        grid-template-columns: 1fr;
        width:1400px;
        max-width: 1400px;
        margin: 0 auto;
        .sideBar-left {
            background-color: ${theme.colors.background_dark};
            height:80vh;
            width:100%;
            border-bottom-left-radius: ${theme.borderRadius.extraRound};
        }
        .menu-container {
            display: grid;
            grid-template-columns: repeat(4, 240px);
            grid-gap: 40px;
            justify-content: center;
            height:80vh;
            padding: 60px 0 80px 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: ${theme.borderRadius.extraRound};
            background-color: ${theme.colors.background_white};
            box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
            box-shadow: inset 0px 0px 12px 0px ${theme.colors.greySemiDark};
            overflow-y: scroll;
            .grille-item {
                height:330px;
                background-color:${theme.colors.white};
                border-radius: ${theme.borderRadius.extraRound};
            }
        }
    }
`