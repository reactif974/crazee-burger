import styled from 'styled-components'
import { theme } from '../../../theme';
import formatNumber from '../../../utils/number/math';
import Button from './Button';

export default function MenuCard({menu}) {

    const shortTitle = menu.title.length > 20 ? menu.title.substring(0,16) + "..." : menu.title

    return (
        <MenuCardStyled image={menu.imageSource} title={menu.title}>
            <div className='pics-container'></div>
            <h2>{shortTitle}</h2>
            <div className="price-container">
                <h3>{formatNumber(menu.price)}€</h3>
                <Button text="Ajouter" type="submit"/>
            </div>
        </MenuCardStyled>
    )
}

const MenuCardStyled = styled.div`
    width:240px;
    height:330px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: ${theme.borderRadius.extraRound};
    .pics-container {
        width: 90%;
        height: 145px;
        margin: 40px auto;
        background: url(${(props) => props.image}) no-repeat;
        background-size: contain;
        background-position: center;
    }
    h2 {
        text-align: left;
        font-family: 'Amatic SC', cursive;
        padding-left:27px;
        font-size: ${theme.fonts['P3.1']};
        margin:0;
    }
    .price-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 30px 10px 30px;
        h3 {
            font-family: 'Open Sans', sans-serif;
            color: ${theme.colors.primary_burger};
            font-size: ${theme.fonts.P0};
            font-weight: ${theme.weights.light};
        }
        button {
            width:100px;
            height:42px;
            font-size: ${theme.fonts.XS};
            border: 1px solid ${theme.colors.primary_burger};
            background-color: ${theme.colors.primary_burger};
            transition: background-color .6s ease, color .6s ease;
            &:hover {
                background-color: ${theme.colors.white};
                color: ${theme.colors.primary_burger};
            }
            &:active {
                background-color: ${theme.colors.primary_burger};
                color: ${theme.colors.white};
            }
        }
    }
`