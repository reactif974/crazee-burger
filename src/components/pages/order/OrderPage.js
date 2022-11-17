import { useParams } from "react-router-dom";
import NavBar from '../reusable-ui/NavBar';
import styled from "styled-components";

export default function OrderPage() {
    // state
        // get name param in url
        const {name} = useParams();

    // affichage(render)
    return (
        <OrderPageStyled>
            <NavBar userName={name} picsPath="../images/logo-orange.png"/>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    height:100vh;
    background-color: #FF9E1C;

`