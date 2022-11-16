import styled from "styled-components"
import { theme } from "../../../theme"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

export default function Button({text,type}) {
    return (
        <ButtonStyled>
            <button type={type} className="button_submit">
                {text}
                <span className="arrow-icon"><MdOutlineKeyboardArrowRight /></span>
            </button>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div`
    .submit-icon {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P3}
    }
    .button_submit {
        width: 100%;
        height: 65px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        border:none;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.background_button_submit};
        color: ${theme.colors.white};
        font-family: 'Open Sans', sans-serif;
        font-size: ${theme.fonts.P1};
        font-weight: ${theme.weights.bold};
        .arrow-icon {
            font-size: ${theme.fonts.P3};
            padding-top:8px;
            padding-left: 8px;
        }
    }
`