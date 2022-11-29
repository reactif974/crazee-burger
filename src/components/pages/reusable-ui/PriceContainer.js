import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import { formatPrice } from '../../../utils/number/format';
import Button from './Button';

export default function PriceContainer({price}) {

  return (
    <PriceContainerStyled>
        <h3>{formatPrice(price)}</h3>
        <Button text="Ajouter" type="submit" className="add-button"/>
    </PriceContainerStyled>
  )
}

const PriceContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 30px 30px 30px;
    h3 {
        font-family: 'Open Sans', sans-serif;
        color: ${theme.colors.primary_burger};
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.light};
    }
    .add-button {
        width:100px;
        height:42px;
        font-size: ${theme.fonts.XS};
        font-family: 'Open Sans', sans-serif;
        border: 1px solid ${theme.colors.primary_burger};
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.primary_burger};
        color: ${theme.colors.white};
        transition: background-color .4s ease, color .4s ease;
        cursor:pointer;
        &:hover {
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary_burger};
        }
        &:active {
            background-color: ${theme.colors.primary_burger};
            color: ${theme.colors.white};
        }
    }
`