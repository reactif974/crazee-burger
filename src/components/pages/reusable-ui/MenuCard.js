import React from 'react'
import styled from 'styled-components';

export default function MenuCard({id}) {
  return (
    <MenuCardStyled>{id}</MenuCardStyled>
  )
}

const MenuCardStyled = styled.div`
    color:white;
`;