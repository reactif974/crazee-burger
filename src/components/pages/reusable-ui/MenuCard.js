import styled from 'styled-components'
import { theme } from '../../../theme';
import PriceContainer from './PriceContainer';

export default function MenuCard({menu}) {

    const shortTitle = menu.title.length > 20 ? menu.title.substring(0,16) + "..." : menu.title

    return (
        <MenuCardStyled image={menu.imageSource} title={menu.title}>
            <div className='pics-container'></div>
            <h2>{shortTitle}</h2>
            <PriceContainer menu={menu}/>
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
`