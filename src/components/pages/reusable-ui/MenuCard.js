import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme';

export default function MenuCard({menu}) {
  return (
    <MenuCardStyled image={menu.imageSource}>
        <div className='pics-container'></div>
        <h2>{menu.title}</h2>
    </MenuCardStyled>
  )
}

const MenuCardStyled = styled.div`
    width:240px;
    height:330px;
    display:flex;
    flex-direction: column;
    .pics-container {
        width:90%;
        height:145px;
        margin: 65px 10px 25px 15px;
        background: url(${(props) => props.image}) no-repeat;
        background-size: contain;
        background-position: center;
    }
    h2 {
        text-align: left;
        font-family: 'Amatic SC', cursive;
        padding-left:27px;
        font-size: ${theme.fonts.P4};
        margin:0;
    }
`;