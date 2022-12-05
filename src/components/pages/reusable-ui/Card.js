import styled from 'styled-components'
import { theme } from '../../../theme';
import PriceContainer from './PriceContainer';

export default function Card({title, imageSource, price }) {

    const shortTitle = title.length > 20 ? title.substring(0,16) + "..." : title

    return (
        <CardStyled image={imageSource} title={title}>
            <div className='pics-container'></div>
            <h2>{shortTitle}</h2>
            <PriceContainer price={price} />
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width:240px;
    height:330px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: ${theme.borderRadius.extraRound};
    .pics-container {
        height: 145px;
        margin: 29px 30px 20px 27px;
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