import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';
import { theme } from '../../../../theme';
import Card from '../../reusable-ui/Card';

export default function MenuCard() {

const [menu, setMenu] = useState(fakeMenu2)

    return (
        <MenuCardStyled className="menu-container">
            {menu.map((menu) => {
                return <div key={menu.id} className="grille-item"><Card {...menu} /></div>
            })}
        </MenuCardStyled>
    )
}

const MenuCardStyled = styled.div`
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
`;