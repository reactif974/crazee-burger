import styled from 'styled-components'
import { theme } from '../../../theme'

export default function Input({value,handleChange,Icon, ...extraProps}) {

    return (
        <InputStyled>
            <span className="icon">{Icon && Icon}</span>
            <input
                value={value}
                onChange={handleChange}
                {...extraProps}
            />
        </InputStyled>
    )
}

const InputStyled = styled.div`
    position:relative;
    width:480px;
    height:65px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 65px;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.greyDark};
    padding:0 0 0 ${theme.spacing.xl};
    text-align: left;
    box-sizing: border-box;
    .icon {
        color: ${theme.colors.greyDark};
        font-size: ${theme.fonts.P2};
        z-index: 1;

    }
    input {
        position:absolute;
        top:0;
        left:0;
        right:0;
        height:63px;
        border:none;
        padding:0 0 0 ${theme.spacing.xxl};
        text-align: left;
        &::placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.light};
        color: ${theme.colors.greyLight};
        }
    }
`