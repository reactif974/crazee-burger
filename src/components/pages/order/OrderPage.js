import { useParams } from "react-router-dom";
import NavBar from '../reusable-ui/NavBar';
import styled from "styled-components";
import { theme } from '../../../theme';

export default function OrderPage() {
    // state
        // get name param in url
        const {name} = useParams();

    // affichage(render)
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
    background: url("../images/logo-orange.png"), #FF9E1C;
    background-size: 80px;
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
    }
    
`