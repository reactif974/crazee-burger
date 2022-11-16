import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Input({value,placeholder,icon,handleChange}) {

    return (
        <InputStyled>
            <span className="input-icon">{icon && icon}</span>
            <input
                value={value}
                type="text" 
                name="name" 
                id="name" 
                placeholder={placeholder}
                onChange={handleChange}
                required 
            />
        </InputStyled>
    )
}

const InputStyled = styled.div`
    position: relative;
    .input-icon {
        position:absolute;
        top:38%;
        left:4%;
        color: ${theme.colors.greyDark};
        font-size: ${theme.fonts.P2}
    }
    input {
        width: 100%;
        height: 65px;
        border:none;
        border-radius: ${theme.borderRadius.round};
        font-size: ${theme.fonts.P2};
        color: ${theme.colors.greyDark};
        padding:0 0 0 ${theme.spacing.xl};
        text-align: left;
        box-sizing: border-box;
        &::placeholder {
            font-family: 'Open Sans', sans-serif;
            font-size: ${theme.fonts.P0};
            font-weight: ${theme.weights.light};
            color: ${theme.colors.greyLight};
        }
    }
`