import React from 'react'
import styled from 'styled-components'

export default function MenuCard({image}) {
  return (
    <MenuCardStyled image={image}>
        <div className='pics-container'></div>
    </MenuCardStyled>
  )
}

const MenuCardStyled = styled.div`
    width:240px;
    height:330px;
    display:flex;
    flex-direction: column;
    align-items: center;
    .pics-container {
        width:200px;
        height:145px;
        margin-top:65px;
        background: url(${(props) => props.image}) no-repeat;
        background-size: contain;
        background-position: center;

    }
`;